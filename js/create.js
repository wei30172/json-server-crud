const form = document.querySelector('form')

const createPost = async (e) => {
  e.preventDefault()

  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  }

  // let url = 'https://my-json-server.typicode.com/wei30172/blog-list-json/posts'
  let url = 'http://localhost:3000/posts'

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('/')
}

// add data
form.addEventListener('submit', createPost)