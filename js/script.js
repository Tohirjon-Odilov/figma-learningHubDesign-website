let none = document.querySelector('.x-none')
let nav = document.querySelector('#nav')
let header = document.querySelector('header')
let hero = document.querySelector('.hero')
let navbar = document.querySelector('.m-navbar')
let input = document.querySelector('#input')
let search = document.querySelector('#search')
let searchX = document.querySelector('.search-x')
let bars = document.querySelector('#bars')
let barsX = document.querySelector('.bars-x')

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

search.onclick = () => {
    input.classList.toggle('active')
    searchX.style.display = 'block'
    mobile.classList.remove('active')
        // barsX.style.display = 'none'
        // bars.style.display = 'block'
}

searchX.onclick = () => {
    input.classList.remove('active')
}

bars.onclick = () => {
    bars.style.display = 'none'
    barsX.style.display = 'block'
    mobile.classList.add('active')
    input.classList.remove('active')
}

barsX.onclick = () => {
    barsX.style.display = 'none'
    bars.style.display = 'block'
    mobile.classList.remove('active')
}