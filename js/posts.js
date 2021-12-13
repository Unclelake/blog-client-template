const postsElement = document.querySelector(".blog-posts");
const readMoreBtn = document.querySelector('.button')

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
      const postDate = new Date(post.date);
      const formatDate = `${postDate.getFullYear()}-${
        postDate.getMonth() + 1
      }-${postDate.getDate()} ${postDate.getHours()}:${postDate.getMinutes()}`;


      if (post.content.length > 100) {
        //Display read me
        postsHTML = `
            <div class='title'><h3>${post.title}</h3></div>
            <div class='author'>${post.author}</div>
            <div class='blog-date'>${formatDate}</div>
            <div class='content'>${post.content.substring(
              0,
              100
        )}  ...<a href="post.html?post_id=${post['_id']}">Read more</a>
            </div>
            
            <hr>
            `;
      } else {
        //Do not display read me
         postsHTML = `
            <div class='title'><h3>${post.title}</h3></div>
            <div class='author'>${post.author}</div>
            <div class='blog-date'>${post.date}</div>
            <div class='content'>${post.content}</div>
            
            <hr>
            `;
      }

  
      


      

      postDivElement.innerHTML = postsHTML;
      postsElement.appendChild(postDivElement);
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * Fetch all posts
 */
fetchAllPosts();
