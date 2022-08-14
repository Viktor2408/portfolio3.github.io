$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.burger-menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });

    $('.slider').slick({
        infinite: false,
        speed: 300,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        // slidesPerRow: 3,
        responsive: [
            {
                breakpoint: 3440,
                settings: {
                  rows: 2,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false,
                  
                
                }
            },
          {
            breakpoint: 1024,
            settings: {
              rows: 1,
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              
            //   slidesPerRow: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              rows: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              rows: 1
            }
          }
          
        ]
    });
    
    
    
    $('.slider2').slick({
        infinite: false,
        speed: 300,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              rows: 1,
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              rows: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              rows: 1
            }
          }
          
        ]
    });
});