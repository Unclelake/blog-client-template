const manageElement = document.querySelector('.table-body');

async function fetchJson() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let data = await response.json();

        let manageHTML = '';

        for (let post of data) {

            const manageDivElement = document.createElement('tr')
            manageDivElement.classList.add('managePost');

            manageHTML = `
            <tr>
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td><a href="../admin/update-post.html?id=${post['_id']}">Update</a>|<a herf='#'>Delete</a></td>
            </tr>
            
            `;
            manageDivElement.innerHTML = manageHTML;
            manageElement.appendChild(manageDivElement)
        }
    } catch (error) {
        
    }
}
fetchJson();