// DOCSTYLE js 
// These are the javascript codes to handle rendering individual templates 

// variables for the templates 
var category_template, type_template, detail_template, image_template, slideshow_template;

// assign initial objects to the current view variables
var current_category = animals_data.category[0];
var current_type = current_category.animals[0];

// this variable holds the url for the image's onclick getSource() function
var image_url;
// this holds the objects for the slideshow which is an array of urls
var slideshow_data;


// Like the example in class, this is a helper function that instantiates a template
// and loads the data to the 'content' element of the html
function showTemplate(template, data) {
	var html = template(data);
	$('#content').html(html);
}

// called from the div class pop to assign the url of clicked image to the image_url variable
function getSource(current) {
	image_url = {url: current};
}

$(document).ready(function() {
    
    // compile handlebars templates to javascripts
    var source = $("#category-template").html();
    category_template = Handlebars.compile(source);
    
    source = $("#type-template").html();
    type_template = Handlebars.compile(source);
	
	source = $("#detail-template").html();
	detail_template = Handlebars.compile(source);
	
	source = $("#image-modal-template").html();
	image_template = Handlebars.compile(source); 
	
	source = $("#slideshow-modal-template").html();
	slideshow_template = Handlebars.compile(source);
	
    $("#category-tab").click(function() {	
		// make the category tab in nav-bar active and others inactive
        $(".navbar-nav .active").removeClass("active");
        $("#category-tab").addClass("active");
        showTemplate(category_template, animals_data);
		$("#searchbox").val("");
        
        $(".category-list").click(function() {
            var index = $(this).data("id");
            current_category = animals_data.category[index];
			$("#type-tab").click();
        });

    });
	
	$("#type-tab").click(function() {
		// make the category tab in nav-bar active and others inactive
        $(".navbar-nav .active").removeClass("active");
        $("#type-tab").addClass("active");
		showTemplate(type_template, current_category);
		$("#searchbox").val("");
		
		// for the slideshow, I gather all the urls of the images of the
		// current type and put it in a new array object to feed the slideshow template
		$("#slideshow-button").click(function() {
			slideshow_data = {name : current_category.name,
							 images: []};
			
			for (i = 0; i < current_category.animals.length; i++) {
				slideshow_data.images.push({src: current_category.animals[i].image1});
				slideshow_data.images.push({src: current_category.animals[i].image2});
			}
			
			// show the modal slideshow
 			var html = slideshow_template(slideshow_data);
			$("#modal-container").html(html);
			$("#modalSlideshow").modal("show");
		});
		
		$(".type-list").click(function() {
            var index = $(this).data("id");
            current_type = current_category.animals[index];
            $("#detail-tab").click();
        });
	});
	
	$("#detail-tab").click(function() {
		// make the category tab in nav-bar active and others inactive
        $(".navbar-nav .active").removeClass("active");
        $("#detail-tab").addClass("active");
		showTemplate(detail_template, current_type);
		
		// shows the modal image 
		$("#pop").on("click", function() {
			var html = image_template(image_url);
			$("#modal-container").html(html);
			$("#modalImage").modal("show");
		});
	});
	
	$('#searchbox').keypress(function(e) {
		// check if the key that was pressed
      	// is the return key (it has id 13)
		if (e.which == 13) {
			// get the search text which is the content of the search box and
			// transform to lower case for case insensitive search
			var search_text = $('#searchbox').val().toLowerCase();
			
			// loop through the entire animals list
			for (i = 0; i < animals_data.category.length; i++) {
				var category = animals_data.category[i];
				for (j = 0; j < category.animals.length; j++) {
					
					// we first split the names in case name has adjectives
					var original = category.animals[j].name.split(" ");
					var name;
					
					// assign only the name of animals minus adjectives
					if (original.length > 1) {
						name = original[1].toLowerCase();
					}

					// if found, display image through detail-tab and return
					// search enables both animal name without adjectives or full name
					if (name == search_text || category.animals[j].name.toLowerCase() == search_text) {
						current_type = category.animals[j];
						$("#detail-tab").click();
						return;
					}
				}
			}
			// if not found, issue an alert
			alert(search_text + " yields no search result.");
			$("#searchbox").val("");
		}
    });

	// show categories as landing page
	$("#category-tab").click();
});

