      $(function() {
        
        $(".slide-one").owlCarousel({
          loop: true,
          margin: 17,
          center: true,
          nav: false,
          pagination: false,
          touchDrag: true,
          responsive:{
            '0': {
              items: 1.2
            },
            '320': {
              items: 1.2
            },
            '768': {
              items: 1.2,
              margin: 40
            },
            '1360': {
              margin: 0,
              items: 1.5
            }
          }
        });
      
      $(".slide-two").owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          items: 1,
          pagination: true,
          touchDrag: true,
          responsive: {
            '1360':{
              items: 1,
              margin: 90
            }
          }
        });
      
      $(".slide-three").owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          items: 1,
          pagination: true,
          touchDrag: true
        });
        
      });
      $('.modal-close, .modal-menu').click(function () {
         $('.modal-nav').attr('hidden', true);
       });
      $('.menu').click(function (e) {
        $('.modal-nav').attr('hidden', false);
        e.preventDefault();
      });