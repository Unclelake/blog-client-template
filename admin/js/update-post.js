window.onload = function() {
    let updateBtn = document.getElementById('update-btn');
    
    /**
     * Fetch here the specific pun that is about to be updated.
     * Prefill the textarea with the fetched pun content
     * 
     * 1. Begin with retrieving the punId from the queryString, check out window.location.search (google or console.log()) 
     * 2. Use the built-in JS Object 'URLSearchParams' to extract the queryString  => let urlParams = new URLSearchParams(window.location.search)
     * 3. Use urlParams to retrieve the punId like so => urlParams.get('id'); 
     * 4. Now you can fetch the specific pun by making a "GET" request to: https://puns-app.herokuapp.com/puns/<punId>, where <punId> is the value of urlParams.get('id')
     * 5. Use the fetched pun data to prefill the textarea#content
     */

     
    getPost();

    /**
     * Add here an eventlistener to update the pun, when the form is submitted
     * 
     * 1. Begin with selecting the form, and add an eventlistener on the form, that gets triggered with the 'submit'-event
     * 2. Make sure to use preventDefault(), to prevent the form from reloading the page
     * 3. Update the specific pun by making a "PATCH" request to: https://puns-app.herokuapp.com/puns/<punId>, where <punId> is the value of urlParams.get('id')
     * 4. Make sure the formdata is sent in to the body parameter, when making the request. See how its done with the create pun request in create-pun.js
     * 5. If the form was successfully submitted, then redirect to the index.html with the following code: window.location.replace('index.html');
     */

    // let form = document.getElementById('update-pun-form');
    // form.addEventListener('submit', async (e) => {
    //     e.preventDefault
    //     let formData = new formData(form);
    //     formDataObject = {
    //         "content": formData.get('content')
    //     }

    //     try {
    //         await fetch('https://puns-app.herokuapp.com/puns/' + urlParams.get('id'), {
    //             method: 'PATCH', // GET, POST, PATCH, DELETE.
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formDataObject)
    //         })
            
    //         location.replace('index.html');
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }
}


async function getPost (){
    try{
        let response    = await fetch('http://localhost:5000/posts');
        let post        = await response.json();
        console.log(post)
    
        //document.getElementById('content-textarea').value = post.content;
    
        return post;
    }catch(error){
        console.log(error)
    }
}