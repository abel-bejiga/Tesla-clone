// scroll snap

const scrollContainer = document.getElementById('mainCont');

scrollContainer.addEventListener('scroll', handleScroll);

function handleScroll() {
  const scrollThreshold = 0.5;
  const scrollPosition = scrollContainer.scrollTop;
  const scrollThresholdPixels = scrollThreshold * scrollContainer.clientHeight;

  scrollContainer.querySelectorAll('.scroll-item').forEach((item) => {
    const itemOffsetTop = item.offsetTop;
    const distance = Math.abs(itemOffsetTop - scrollPosition);

    if (distance <= scrollThresholdPixels) {
      scrollContainer.scrollTo({
        top: itemOffsetTop,
        behavior: 'smooth',
      });
    }
  });
}

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