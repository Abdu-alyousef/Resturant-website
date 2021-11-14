$(document).ready(function(){
$('.js--section-features').waypoint(function(direction){
    if(direction == 'down'){
      $('nav').addClass('sticky')
    } else{
      $('nav').removeClass('sticky')
    }
},
{offset :'60px'}
);


$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


$('.js--wp-1').waypoint(function(direction){
  $('.js--wp-1').addClass('animated fadeIn');
},
{offset : '50%'});

$('.js--wp-2').waypoint(function(direction){
  $('.js--wp-2').addClass('animated fadeInUp');
},
{offset : '50%'});

$('.js--wp-3').waypoint(function(direction){
  $('.js--wp-3').addClass('animated pulse');
},
{offset : '50%'});



});
