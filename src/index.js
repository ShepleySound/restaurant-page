import loadHeader from "./load-header";
import loadHome from "./load-home";
import loadFooter from "./load-footer";
import loadMenu from "./load-menu";

const content = document.querySelector('#content')
const header = content.appendChild(loadHeader())
let currentPage = content.appendChild(loadHome())
const footer = content.appendChild(loadFooter())

const homeButton = document.querySelector('#logo')
const menuButton = document.querySelector('#menu')
const contactButton = document.querySelector('#contact')

const changePage = function(loadPage){
    content.removeChild(currentPage)
    currentPage = content.insertBefore(loadPage, footer)
    Array.from(document.querySelectorAll('.head-link.selected')).forEach((el) => el.classList.remove('selected'))

}

homeButton.addEventListener('click', e => {
    changePage(loadHome())
    e.target.classList.add('selected')
})

menuButton.addEventListener('click', e => {
    changePage(loadMenu())
    e.target.classList.add('selected')
})