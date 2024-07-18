// key
const todos = document.getElementById('todoKey')
const apiKey = document.getElementById('apiKey')
const postKey = document.getElementById('postKey')
const bookKey = document.getElementById('bookKey')
const contactKey = document.getElementById('contactKey')
// dummy api
//value
const apiDummy = document.getElementById('apiDummy')
const todoValue = document.getElementById('todo')
const postsData = document.getElementById('posts_data')
const bookData = document.getElementById('book_data')
const contactData = document.getElementById('contact_data')

todos.addEventListener('click', () => {
    todoValue.classList.remove('hide')
    apiDummy.classList.add('hide')
    postsData.classList.add('hide')
    contactData.classList.add('hide')
    bookData.classList.add('hide')
})
postKey.addEventListener('click', () => {
    postsData.classList.remove('hide')
    todoValue.classList.add('hide')
    apiDummy.classList.add('hide')
    contactData.classList.add('hide')
    bookData.classList.add('hide')
})
bookKey.addEventListener('click', () => {
    bookData.classList.remove('hide')
    todoValue.classList.add('hide')
    apiDummy.classList.add('hide')
    postsData.classList.add('hide')
    contactData.classList.add('hide')
})
contactKey.addEventListener('click', () => {
    contactData.classList.remove('hide')
    todoValue.classList.add('hide')
    apiDummy.classList.add('hide')
    postsData.classList.add('hide')
    bookData.classList.add('hide')
})


apiKey.addEventListener('click', () => {
    console.log("api dummy")
    todoValue.classList.add('hide')
    postsData.classList.add('hide')
    bookData.classList.add('hide')
    bookData.classList.add('hide')
    apiDummy.classList.remove('hide')
})


// api list aside hide and show
const docList = document.getElementById('docList');
const docsmenu = document.getElementById('docsmenu')
const docsclose = document.getElementById('docsclose')

docsmenu.addEventListener('click', () => {
    docList.classList.add('docListActive')
    // docsmenu.classList.add('menuActiveremove')
})
docsclose.addEventListener('click', () => {
    docList.classList.remove('docListActive')
    // docsmenu.classList.add('menuActiveactive')
})