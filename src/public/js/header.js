let menu = document.querySelector('.menu');

let nav = document.querySelector('.nav');

let close = document.querySelector('.close')

let open = document.querySelector('.open')


menu.addEventListener('click', () => {
    console.log("navbar" , nav)

    nav.classList.toggle('active')
    open.classList.toggle('hide');
    close.classList.toggle('show');
})
