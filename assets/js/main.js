/* SHOW MENU */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* MENU SHOW*/
/* Validar se a constante existe */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* MENU HIDE */

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  //quando clicar em cada um dos nav-link, revomemos a class 'show menu'
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */

function scrollHeader() {
  const header = document.getElementById('header')
  //quando o scroll está maior que 100vh, adicionar a classe 'scroll-header' para a tag header
  if (this.scrollY >= 100) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPPER DISCOVER*/
var swiper = new Swiper('.discover_container', {
  effect: 'coverflow',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination'
  },
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  mousewheel: true,
  keyboard: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 50
  }
})

/* VIDEO*/
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

function playPause() {
  if (videoFile.paused) {
    // play video
    videoFile.play()

    // Nós mudamos o icone
    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line')
  } else {
    // pause video
    videoFile.pause()

    //mudamos o icone
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
  }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
  // finalizar video, mudar icone
  videoIcon.classList.remove('ri-pause-line')
  videoIcon.classList.add('ri-play-line')
}
// finalizar video
videoFile.addEventListener('ended', finalVideo)
