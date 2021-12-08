const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')
const deleteBtn = document.querySelector('.delete')

const renderDetails = async () => {
  // let url = 'https://my-json-server.typicode.com/wei30172/blog-list-json/posts'
  let url = 'http://localhost:3000/posts'

  const res = await fetch(url +'/'+ id)

  if(!res.ok) {
    window.location.replace('/')
  }

  const post = await res.json()

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `
  container.innerHTML = template
}

const deletePost = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id, {
    method: 'DELETE'
  })

  window.location.replace('/')
}

// delete data
deleteBtn.addEventListener('click', deletePost)

// render data
window.addEventListener('DOMContentLoaded', renderDetails)