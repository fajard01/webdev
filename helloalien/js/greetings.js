// Here event loop is started.
setInterval(function() {
    // Using the CSS selector first_child, it accesses the <div> tag with id=aliens and its first 
    // image in list
    $("#aliens img:first")                  // load first image 
        .fadeOut(1000)                      // fade out(length of)
        .next()                             // load next image
        .fadeIn()                           // fade this image in
        .end()                              // clear function stack
        .appendTo("#aliens");               // add back last image to image queue  
}, 1000);
