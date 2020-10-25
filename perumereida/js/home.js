
// document.addEventListener("DOMContentLoaded", theDomHasLoaded, true);
// window.addEventListener("load", pageFullyLoaded, true);

// function theDomHasLoaded(e){
//     $('body').css('visibility', 'visible');
// };

// VISIBILITY //
// $(function(){
//     $('body').css('visibility', 'visible');
// });

// TOGGLE TRANSPARENCY ON SCROLL //
$(window).scroll(function(){
    var logo = document.getElementById('logo-img');
    var scroll = $(window).scrollTop();
    if(scroll > 50){
        $('.fixed-top').css('background', 'black');
        $('.fixed-top').css('filter', 'invert(0)');
        $('.fixed-top').css('padding', '0');
    } else{
        $('.fixed-top').css('background', 'transparent');
        $('.fixed-top').css('filter', 'invert(1)');
        $('.fixed-top').css('padding', '50px');
    }
});


$(function(){
    var current = location.pathname;
    $('#navbarMain a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
            $this.css('background-color', 'white');
            $this.css('color', 'black');
        }
    })
});
