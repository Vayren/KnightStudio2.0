$(document).ready(function(){
    AOS.init({
        startEvent: 'load',
        once: true,
        duration: 600
      });

    //Sticky navigation
    $('.main-nav').sticky({topSpacing: 0, zIndex: 9998});

    //Scroll on buttons
    $('.js--btn-start').click(function(event){
        event.preventDefault();
        $('html, body').animate(
            { scrollTop: $('.main-nav').offset().top},
            1000,
            "easeInOutExpo",
        )
    })
    
    //Navigation scroll
   $('.js--scroll-btn').click(function(event) {
       event.preventDefault();
       $('html, body').animate(
           { scrollTop: $(this.hash).offset().top - $('.main-nav').outerHeight()
       }, 1500, "easeInOutExpo")
   })

   //Btn-up
   $('.js--btn-up').attr('data-aos-offset', $('header').outerHeight());

   $('.js--btn-up').click(function(event){
       event.preventDefault();
       $('html, body').animate(
           {scrollTop: 0},
           1200,
           "easeInOutExpo",
       )  
   })

   //Galery
   $('.portfolio-gallery').venobox({                                                                              
        share      : ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'],
        spinner    : "cube-grid",
        cb_pre_open : function(){
            console.log('PRE OPEN');
            $('body, html').css({overflow: "hidden"})
        },
        cb_pre_close  : function(){
            $('body, html').css({overflow: "auto"})
        },
    });

    //Portfolio sort
    let portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    
    $('.filter-button-group li').on( 'click', function() {
        $('.filter-button-group li').removeClass('active');
        $(this).addClass('active');

        let filterValue = $(this).attr('data-filter');
        portfolioIsotope.isotope({ filter: filterValue });
    });

    //Testimonials slider
    $(".testimonials-slider").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 400
      });
})