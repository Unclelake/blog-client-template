window.onload = function() {
    let queryString = location.search;       // retrieving the querystring
    console.log(queryString);
    let urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'));

     
    getPost('61af4ce99f4163242016d792'); //urlParams.get('id')

    updatePost('61af4ce99f4163242016d792')

    
}
async function getPost(id){
    try{
        let response    = await fetch('http://localhost:5000/posts/' + id);
        let post        = await response.json();
        //console.log(post)
    
        document.getElementById('content-textarea').value   = post.content;
        document.getElementById('author').value             = post.author;
        document.getElementById('title').value              = post.title;
        // document.getElementById('tags').value = tags.content;

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
            "tags": formData.get('tags')
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

            location.replace('../admin/index.html');
         } catch(error) {
             console.log(error);
         }
    })
}


