
import refs from './refs.js';
import menu from './menu.json'
import foodCard from './templates/food-card.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === null) {
  refs.body.classList.add('light-theme')
 }

refs.themeSwitchToggle.addEventListener('change', changeTheme)
 
function changeTheme() {
  if (refs.themeSwitchToggle.checked === true) {
    refs.body.classList.remove('light-theme')
    refs.body.classList.add('dark-theme')
    localStorage.setItem('Theme', 'DARK')
  }
  else {
    refs.body.classList.remove('dark-theme')
    refs.body.classList.add('light-theme')
    localStorage.setItem('Theme', 'LIGHT')

  }
}

if (localStorage.getItem('Theme') === 'DARK') {
  refs.themeSwitchToggle.checked = true;
  refs.body.classList.add('dark-theme')
}

function CreateMenu(menu) {
  return menu.map(foodCard).join ('')
}
refs.menuList.insertAdjacentHTML('beforeend',CreateMenu(menu))