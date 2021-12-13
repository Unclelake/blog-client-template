let queryString = location.search; // retrieving the querystring
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
const postId = urlParams.get("post_id");

const postDetailsElement = document.querySelector(".post-details");
async function fetchPost(id) {
  const response = await fetch("http://localhost:5000/posts/" + id);
  const post = await response.json();
  const postDetails = `
    <div>${post.title}</div>
    <div>${post.author}</div>
    <div>${post.date}</div>
    <div>${post.content}</div>
    
    
    `;
  postDetailsElement.innerHTML = postDetails;
}
fetchPost(postId);
