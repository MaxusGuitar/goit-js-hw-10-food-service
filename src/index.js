import './sass/main.scss'
import menu from './../menu.json'
import menuTemplate from './../templates/menu.hbs'

const menuJS = document.querySelector('.menu')
const menuCreate = createAllMenu(menu)

const checkBox = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}
const {LIGHT, DARK} = Theme

menuJS.insertAdjacentHTML('beforeend', menuCreate)

function createAllMenu(menu) {
    return menu.map(menuTemplate).join('')
}

document.body.classList.add(
  localStorage.getItem('theme') === null ? LIGHT : localStorage.getItem('theme'),
);
if (document.body.classList.value === DARK) {
    checkBox.checked = true;
}
function changeTheme(a) {
  if (a.target.checked) {
    document.body.classList.replace(LIGHT, DARK)
    localStorage.setItem('theme', DARK)
    return;
  }
  document.body.classList.replace(DARK, LIGHT)
  localStorage.setItem('theme', LIGHT)
}
checkBox.addEventListener('change', changeTheme)

