

document.addEventListener('DOMContentLoaded', () => {


  $('.header-burger').on('click', function() {

    if($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.header-mobail-wrap').slideUp(500);
    }else {
      $(this).addClass('is-active');
      $('.header-mobail-wrap').slideDown(500);
    }
  });


  
  const bannerSwiper = new Swiper('.banner-swiper', {
        speed: 1000,
        spaceBetween: 0,
        autoHeight: true,
         navigation: {
            nextEl: '.banner-swiper .swiper-button-next',
            prevEl: '.banner-swiper .swiper-button-prev',
          },
          pagination: {
            el: '.banner-swiper .swiper-pagination',
            type: 'bullets',
            clickable: true
          },
      });
   

      $('.services-btn').magnificPopup({
        type: 'inline',
        showCloseBtn: false,
        callbacks: {
          beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
          }
        },
      });

      $('.modal-form-close').on('click', function() {
        $.magnificPopup.close();
      });

   $('.gallery-wrap a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
    callbacks: {
      beforeOpen: function() {
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
   });

   $('.gallery-btn a').on('click', function(e) {
    e.preventDefault();
    var galleryItem = $('.gallery-item');
    if($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).text('Show more');
      galleryItem.each(function() {
   if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
     $(this).slideUp();
   }
      });
    }
    else {
      $(this).addClass('is-active');
      $(this).text('Hide');
      galleryItem.each(function() {
        if(!$(this).is(':visible')) {
          $(this).addClass('is-active');
          $(this).slideDown();
        }
      });
    }
   });


   const reviewsSwiper = new Swiper('.reviews-swiper', {
    speed: 1000,
    spaceBetween: 20,
      pagination: {
        el: '.reviews-swiper .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
      
        319: {
          slidesPerView: 1,
         
        },
        575: {
          slidesPerView: 2,
        
        },
        992: {
          slidesPerView: 3,
        
        },
       
       
      }
  });
});



  
let links = document.querySelectorAll(".header-nav ul li  > a");
for (let i = 0; i < links.length; i++ ) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
    }; 
};


let link = document.querySelectorAll(".header-mobail-nav ul li  > a");
for (let i = 0; i < link.length; i++ ) {
    link[i].onclick = function () {
        document.getElementById(link[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
    }; 
}
    


