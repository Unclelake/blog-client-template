let tags = ['Covid-19', 'Weather', 'News', 'Fashion', 'Economics', 'Health'];
function displayingTags () {
    let tagList = document.getElementById('tags');
    tagList.size = tags.length;
    for(let tag of tags) {
        console.log(tag)
        tagList.innerHTML += 
            `<option value="${tag}">${tag}</option>`
    }
}

displayingTags();

// let options = document.getElementById('tags').children;
// for (let option of options) {
//     option.addEventListener('click', () => {
//         console.log(document.getElementById('tags').selectedOptions)
//         alert('hello')
//     })
// }
