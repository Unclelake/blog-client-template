window.onload = function(){
    createPostEvent();
}

function createPostEvent(){
    let createForm = document.getElementById("create-post-form");
    createForm.addEventListener('submit', async function(e) {
      e.preventDefault();

   let formData = {
      "title": document.getElementById('title-input').innerHTML,
      "author": document.getElementById('author-input').innerHTML,
      "content": document.getElementById('content-textarea-input').value,
      "tags": document.getElementById('tags').selectedOptions
    

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



