// modal menu 
let menu = document.getElementById('menu')
let close = document.getElementById('close-btn')
let modal = document.querySelector('.modal')

function menuClicked() {
    modal.classList.remove('slideOut', 'none')
    modal.classList.add('slideIn')
  }

function closeClicked() {
   modal.classList.add('slideOut', 'none')
   modal.classList.remove('slideIn')
  }

  menu.addEventListener('click', menuClicked)
  close.addEventListener('click', closeClicked)