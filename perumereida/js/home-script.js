// TOGGLE TRANSPARENCY ON SCROLL //
$(window).scroll(function(){
    var logo = document.getElementById('logo-img');
    var scroll = $(window).scrollTop();
    if(scroll > 50){
        $('.fixed-top').css('background', 'black');
        $('.fixed-top').css('filter', 'invert(0)');
        $('.fixed-top').css('padding', '0');
        logo.style.display = "block";
    } else{
        $('.fixed-top').css('background', 'transparent');
        $('.fixed-top').css('filter', 'invert(1)');
        $('.fixed-top').css('padding', '50px');
        logo.style.display = "none";
    }
});

// LEFT JUSTIFY SOCIAL ICONS ON MEDIA QUERY
// $(window).resize(function(){
//     if($(window).width()<767){
//       $('.navbar-nav').removeClass('ml-auto');
//       $('.navbar-nav').addClass('mr-auto');
//       $('.social-media-icon').css('padding-left', '0');
//     else{
//       $('.navbar-nav').removeClass('mr-auto');
//       $('.navbar-nav').addClass('ml-auto');
//    }
// });
