let none = document.querySelector('.x-none')
let nav = document.querySelector('#nav')
let header = document.querySelector('header')
let hero = document.querySelector('.hero')
let navbar = document.querySelector('.m-navbar')


none.onclick = () => {
        nav.setAttribute('class', 'd-none')
        console.log("onclick");
        hero.style.paddingTop = '100px'
    }
    // console.log(event.scrollx);
document.onscroll = () => {
    console.dir(scrollY)
    if (scrollY != 0) {
        header.setAttribute('class', 'shadow')
        navbar.style.minHeight = '60px'
    } else {
        header.removeAttribute('class', 'shadow')
        navbar.style.minHeight = '100px'
    }

}