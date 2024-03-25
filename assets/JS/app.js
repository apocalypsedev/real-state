function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header')    
};
window.addEventListener('scroll', scrollHeader);

var swiperPopular = new Swiper(".popular__container", {
    grabCursor: true,
    spaceBetween: 32,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 

const sections = document.querySelectorAll('section[id]')
if (window.scrollY) {
  window.scroll(0, 0); // Обнулите позицию пролистывания на левый верхний угол документа.
}

window.scrollByPages(1);
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offSetHeight,
            sectionTop = current.offSetTop - 58,
            sectionId = current.getAttribute('id')

      if (scrollY > screenTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + "]").classList.add("active-link")
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + "]").classList.remove("active-link") 
      }
    })
}

window.addEventListener('scroll', scrollActive);
