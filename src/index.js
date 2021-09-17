import './sass/main.scss'
import menu from './../menu.json'
import menuTemplate from './../templates/menu.hbs'

const menuJS = document.querySelector('.menu')
const menuCreate = createAllMenu(menu)

menuJS.insertAdjacentHTML('beforeend', menuCreate)

function createAllMenu(menu) {
    return menu.map(menuTemplate).join('')
}