window.onload = function(){
    createPostEvent();
}

function createPostEvent(){
    let createForm = document.getElementById("create-post-form");


createForm.addEventListener('submit', async function(e) {
    e.preventDefault();

  /*{  "title": "Title 3",
    "content": "Content. 3",
    "author": "Author name 2",
    "tags": ["Travel","JavaScript"] 
}
    */

let formData = {
    "title": document.getElementById('title-input').innerHTML,
    "author": document.getElementById('author-input').innerHTML,
    "content": document.getElementById('content-text-area').innerHTML
    
}

    try{
        await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

    } catch(error){

    }

})
}