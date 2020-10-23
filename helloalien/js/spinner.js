// spin the circle
setInterval(function() {
    // Using the CSS selector first_child, it accesses the <div> tag with id=aliens and its first 
    // image in list
    $("#spinner img:first")                  
        .fadeOut(200)                       
        .next()                             
        .fadeIn()                           
        .end()                          
        .appendTo("#spinner");              
}, 200);  
// blink the text
var blink = true;
setInterval(function() {
    if (blink == true) 
        $("#report").hide();
    else
        $("#report").show();
    blink = !blink;
}, 800);