window.onload = function(){
    createPostEvent();
}

function createPostEvent(){
    let createForm = document.getElementById("create-post-form");
    createForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      

   let formData = {

      "title": document.getElementById('title-input').value,
      "author": document.getElementById('author-input').value,
      "content": document.getElementById('content-textarea-input').value,
      "tags": generatingTagsFromSelectedOtions()
    }
    

    try{
        await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        location.replace('../admin/index.html');

    } catch(error){
        console.log(error)

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



