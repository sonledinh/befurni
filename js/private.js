 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});   

$('.slide-part').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 3, 
    prevArrow: '', 
    nextArrow: '',
});  

$('.slide-feedback').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});  


$('.slider-for').slick({
    autoplay: false, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true, 
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    autoplay:false,
    arrow:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>', 
    nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>', 
    responsive: [
        {
            breakpoint: 1024, 
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            } 
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ],
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
});

var dropdowns = $(".dropdown");
dropdowns.find("dt").click(function(){
    dropdowns.find("dd ul").hide();
    $(this).next().children().toggle();
});
dropdowns.find("dd ul li a").click(function(){
    var leSpan = $(this).parents(".dropdown").find("dt a span");
  
    // Remove selected class
    $(this).parents(".dropdown").find('dd a').each(function(){
    $(this).removeClass('selected');
  });
    leSpan.html($(this).html());
    if($(this).hasClass('default')){
    leSpan.removeClass('selected')
  }
    else{
        leSpan.addClass('selected');
        $(this).addClass('selected');
    }
    $(this).parents("ul").hide();
});
$(document).bind('click', function(e){
    if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});


// jQuery(document).ready(function( $ ) {
//   $("#menu").mmenu({
//      "extensions": [
//         "fx-menu-zoom"
//      ],
//      "counters": true
//   });
// });