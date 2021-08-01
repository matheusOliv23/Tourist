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

/*SHOW SCROLL UP*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Menu ativo conforme a seção visível na página*/
const sections = document.querySelectorAll('main section[id]')
window.addEventListener('scroll', function () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  }
})

/*DARK LIGHT THEME*/
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/* SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 600,
  reset: true
})

sr.reveal(
  '.home_data-title, .home_social-link, .home_info, .discover_container, .experience_data, .experience_overlay, .place_card, .sponsor_content, .footer_data, .footer_rights',
  {
    origin: 'top',
    internal: 100
  }
)

sr.reveal('.button, .about_data, .video_description, .subscribe_description', {
  origin: 'left'
})
sr.reveal(
  '.home_data-subtitle, .about_img-overlay, .video_content, .subscribe_form',
  {
    origin: 'right',
    internal: 100
  }
)

/* SCROLL SUAVE*/
$('.nav-item a[href^="#"]').on('click', function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top

  $('html, body').animate(
    {
      scrollTop: targetOffset - 100
    },
    800
  )
})

$('.home_data a[href^="#"]').on('click', function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top

  $('html, body').animate(
    {
      scrollTop: targetOffset - 100
    },
    800
  )
})
