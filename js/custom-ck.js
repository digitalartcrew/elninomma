$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()});$(".scrollup").click(function(){$("html, body").animate({scrollTop:0},600);return!1});userAgent=window.navigator.userAgent;if(/iP(hone|od|ad)/.test(userAgent)==0){$(".slide-up").bind("inview",function(e,t){t==1?$(this).addClass("animated fadeInUp"):$(this).removeClass("animated fadeInUp")});$(".slide-right").bind("inview",function(e,t){t==1?$(this).addClass("animated fadeInRight"):$(this).removeClass("animated fadeInRight")});$(".slide-left").bind("inview",function(e,t){t==1?$(this).addClass("animated fadeInLeft"):$(this).removeClass("animated fadeInLeft")})}$("#main-nav").scrollspy();$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$(".navbar").css("position")=="fixed"?$("html,body").animate({scrollTop:e.offset().top-83},1e3):$("html,body").animate({scrollTop:e.offset().top},1e3);return!1}}});$("#newsletter-signup").submit(function(){var e=$(this).serialize();$.ajax({type:"POST",url:"assets/newsletter.php",data:e,success:function(e){if(e=="OK"){result='<div class="alert alert-success">Yeeha, you are signed up!"</div>';$(".input-group").hide();setTimeout("location.reload(true);",7e3)}else result=e;$("#error-info").html(result)}});return!1});$("#contact-form").submit(function(){var e=$(this).serialize();$.ajax({type:"POST",url:"assets/contact.php",data:e,success:function(e){if(e=="OK"){result='<div class="alert alert-success">All good, message sent!"</div>';$(".input-group").hide();setTimeout("location.reload(true);",7e3)}else result=e;$("#contact-error").html(result)}});return!1});$("#tweets-feed").tweet({join_text:!1,username:"envato",modpath:"./assets/twitter/",avatar_size:!1,count:1,loading_text:"loading tweets...",seconds_ago_text:"about %d seconds ago",a_minutes_ago_text:"about a minute ago",minutes_ago_text:"about %d minutes ago",a_hours_ago_text:"about an hour ago",hours_ago_text:"about %d hours ago",a_day_ago_text:"about a day ago",days_ago_text:"about %d days ago",view_text:"view tweet on twitter"});$(".fitvids").fitVids()});