const postsElement = document.querySelector(".blog-posts");

async function fetchAllPosts() {
  // console.log("fetching posts");
  try {
    let response = await fetch("http://localhost:5000/posts");
    console.log(response.status);
    let data = await response.json();
    let postsHTML = "";
    for (let post of data) {
      const postDivElement = document.createElement("div");
      postDivElement.classList.add("posts");

      postsHTML = `
            <div class='title'><h3>${post.title}</h3></div>
            <div class='author'>${post.author}</div>
            <div class='blog-date'>${post.date}</div>
            <div class='content'>${post.content}</div>
            <hr>
            `;

      postDivElement.innerHTML = postsHTML;
      postsElement.appendChild(postDivElement);
    }
  } catch (error) {}
}

/**
 * Fetch all posts
 */
fetchAllPosts();
