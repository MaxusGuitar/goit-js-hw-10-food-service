import './sass/main.scss'
import menu from './../menu.json'
import menuTemplate from './../templates/menu.hbs'

const menuJS = document.querySelector('.menu')
const menuCreate = createAllMenu(menu)
const checkbox = document.querySelector('#theme-switch-toggle')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}
const {LIGHT, DARK} = Theme

menuJS.insertAdjacentHTML('beforeend', menuCreate)

function createAllMenu(menu) {
    return menu.map(menuTemplate).join('')
}

checkbox.addEventListener('click', changeTheme)

function changeTheme() {
    if (checkbox.checked) {
        document.body.classList.remove(LIGHT)
        document.body.classList.add(DARK)
        localStorage.setItem('theme', DARK)
        
    } else {
        document.body.classList.remove(DARK)
        document.body.classList.add(LIGHT)
        localStorage.setItem('theme', LIGHT)
        
    }
}
