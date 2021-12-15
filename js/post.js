let queryString = location.search; // retrieving the querystring
let urlParams = new URLSearchParams(queryString);
const postId = urlParams.get("post_id");

const postDetailsElement = document.querySelector(".post-details");

async function fetchPost(id) {
  const response = await fetch("http://localhost:5000/posts/" + id);
  const post = await response.json();


  const postDate = new Date(post.date);
  const formatDate = `${postDate.getFullYear()}-${
    postDate.getMonth() + 1
  }-${postDate.getDate()} ${postDate.getHours()}:${postDate.getMinutes()}`;
  
  const postDetails = `
    <div><h1>${post.title}</h1></div>
    <div><i><b>Tags: </b>${post.tags}</i></div>
    <div><b>Author: </b>${post.author}</div>
    <div>${formatDate}</div>
    <div class="content">${post.content}</div>
    
    
    `;
  postDetailsElement.innerHTML = postDetails;
}
fetchPost(postId);
