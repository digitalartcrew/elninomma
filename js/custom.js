$(document).ready(function() {

	// ==================== SCROLL TO TOP ====================== //
	$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
    });


	// ==================== CSS ANIMATIONS (DISABLES ON MOBILE DEVICES) ==================== //
	userAgent = window.navigator.userAgent;
	
	if(/iP(hone|od|ad)/.test(userAgent)==false) {

		$('.slide-up').bind('inview', function (event, visible) {
		  if (visible == true) {
		    // element is now visible in the viewport
		    $(this).addClass('animated fadeInUp');
		  } else {
		    // element has gone out of viewport
		    $(this).removeClass('animated fadeInUp');
		  }
		});

		$('.slide-right').bind('inview', function (event, visible) {
		  if (visible == true) {
		    // element is now visible in the viewport
		    $(this).addClass('animated fadeInRight');
		  } else {
		    // element has gone out of viewport
		    $(this).removeClass('animated fadeInRight');
		  }
		});

		$('.slide-left').bind('inview', function (event, visible) {
		  if (visible == true) {
		    // element is now visible in the viewport
		    $(this).addClass('animated fadeInLeft');
		  } else {
		    // element has gone out of viewport
		    $(this).removeClass('animated fadeInLeft');
		  }
		});

	}
   
	// ==================== BOOTSTRAP SCROLLSPY ==================== //
	$('#main-nav').scrollspy();

	// ==================== SMOOTH SCROLLING BETWEEN SECTIONS ==================== //
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	           	if ($(".navbar").css("position") == "fixed" ) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top-83
	            }, 1000);
	         } else {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	         }
	            return false;
	        }
	    }
	});

	// ==================== NEWSLETTER SIGNUP ==================== //
    $("#newsletter-signup").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/newsletter.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="alert alert-success">Yeeha, you are signed up!"</div>';
					$(".input-group").hide();
					setTimeout("location.reload(true);",7000);
			  	} else {
					result = msg;
			  	}
			  	$('#error-info').html(result);
		    }
		});
		return false;
	});

	// ==================== CONTACT FORM ==================== //
    $("#contact-form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="alert alert-success">All good, message sent!"</div>';
					$(".input-group").hide();
					setTimeout("location.reload(true);",7000);
			  	} else {
					result = msg;
			  	}
			  	$('#contact-error').html(result);
		    }
		});
		return false;
	});

	// ==================== TWITTER FEED ==================== //
	$("#tweets-feed").tweet({
	  join_text: false,
	  username: "elninotraining", // Change username here
	  modpath: './assets/twitter/', 
	  avatar_size: false,
	  count: 1, // number of tweets
	  loading_text: "loading tweets...",
	  seconds_ago_text: "about %d seconds ago",
	  a_minutes_ago_text: "about a minute ago",
	  minutes_ago_text: "about %d minutes ago",
	  a_hours_ago_text: "about an hour ago",
	  hours_ago_text: "about %d hours ago",
	  a_day_ago_text: "about a day ago",
	  days_ago_text: "about %d days ago",
	  view_text: "view tweet on twitter"
	});

	// ==================== FITVIDS ==================== //
	// https://github.com/marclarr/FitVids.js
	$('.fitvids').fitVids();

	// Closing the $(document).ready(function())
});