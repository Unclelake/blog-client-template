window.onload = function() {
    let queryString = location.search;       // retrieving the querystring
    console.log(queryString);
    let urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'));
 
    getPost(urlParams.get('id')); //urlParams.get('id')
    updatePost(urlParams.get('id'))
    
    
}
async function getPost(id){
    try{
        let response    = await fetch('http://localhost:5000/posts/' + id);
        if(!response.ok){
            throw new Error('Some problems with connecting to API')
        }
        let post        = await response.json();
        console.log(post)
        console.log(post.tags)
    
        document.getElementById('title').value              = post.title;
        document.getElementById('author').value             = post.author;
        document.getElementById('content-textarea').value   = post.content;

        for (let tag of post.tags){
            let option = document.getElementById(tag)
            option.setAttribute('selected', true)
            console.log(option)
            console.log(tag)
        }

    }catch(error){
        console.log(error)
    }
}


function updatePost (id){
    let form = document.getElementById('update-post-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();


        let formData = new FormData(form);
        formDataObject = {
            "content":formData.get('content'),
            "title": formData.get('title'),
            "author": formData.get('author'),
            "tags": generatingTagsFromSelectedOtions()
        }

        console.log(formDataObject);
        console.log(JSON.stringify(formDataObject));

         try {
             await fetch('http://localhost:5000/posts/' + id, {
                 method: 'PATCH',  //GET, POST, PATCH, DELETE.
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(formDataObject)
             })
             console.log(formDataObject)

           location.replace('../admin/index.html');
         } catch(error) {
             console.log(error);
         }
    })
}


function generatingTagsFromSelectedOtions () {
    let options = document.querySelectorAll('option');
        let tagsArr = [];

        for (let option of options){
            if(option.selected){
                tagsArr.push(option.value);
            }
        }
        return tagsArr;
}