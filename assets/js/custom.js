  // init Isotope
  var $grid = $('.portfolio-main').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-list').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // =====isotope end====
  // =====sweper js======
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 400,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  // ======end======
      // <!-- aos code===== -->
      AOS.init({
        offset: 300,
        duration:1800,
    }
    );
    // <!-- =====aos js end==== -->