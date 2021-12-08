const manageElement = document.querySelector('.table-body');

async function fetchJson() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let data = await response.json();

        let manageHTML = '';

        for (let post of data) {

            const manageDivElement = document.createElement('tr')
            manageDivElement.classList.add('managePost');
            console.log(post['_id'])

            manageHTML = `
            <tr>
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td><a href="../admin/update-post.html?id=${post['_id']}">Update</a>|
            <a class="delete-links" data-id="${post['_id']}" herf='#'>Delete</a></td>
            </tr>
            
            `;
            manageDivElement.innerHTML = manageHTML;
            manageElement.appendChild(manageDivElement)
        }
    } catch (error) {
        
    }
    deletePostEvent()
}
fetchJson();

function deletePostEvent() {

    let deleteLinks = document.getElementsByClassName('delete-links');
    console.log(deleteLinks);
    for (let link of deleteLinks) {
        link.addEventListener('click', async function (e) {
            e.preventDefault();
            // console.log(e.target.dataset.id)
            try {
                await fetch("http://localhost:5000/posts/" + e.target.dataset.id,
                    {
                        method: 'DELETE'
                    }
                );
                e.target.parentNode.parentNode.remove();
            
            } catch (error) {
                console.log(error);
            }
        
        })
    }
}
