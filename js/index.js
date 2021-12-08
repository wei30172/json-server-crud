const container = document.querySelector('.blogs')
const searchForm = document.querySelector('.search')

const renderPosts = async (term) => {
  // let url = 'https://my-json-server.typicode.com/wei30172/blog-list-json/posts'
  let url = 'http://localhost:3000/posts'
  let uri = url + '?_sort=likes&_order=desc'

  if(term) {
    uri += `&q=${term}` 
  }
  const res = await fetch(uri)

  if(!res.ok) {
    container.innerHTML = `<h2>oops something went wrong</h2>`
  }

  const posts = await res.json()
  // console.log(posts)

  let template = ''
  posts.forEach(post => {
    template += `
    <div class="post">
      <h2>${post.title}</h2>
      <p><small>${post.likes} ❤</small></p>
      <p>${post.body.slice(0, 200)}...</p>
      <a href="/details.html?id=${post.id}">Read more</a>
    </div>
    `
  })

  container.innerHTML = template;
}

// search data
searchForm.addEventListener('submit', async(e) => {
  e.preventDefault()
  renderPosts(searchForm.term.value.trim())
})
// render data
window.addEventListener('DOMContentLoaded', () => renderPosts())