/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */(function(e){function t(){var t=window.innerHeight,n=document.compatMode;if(n||!e.support.boxModel)t=n=="CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;return t}e(window).scroll(function(){var n=t(),r=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,i=[];e.each(e.cache,function(){this.events&&this.events.inview&&i.push(this.handle.elem)});i.length&&e(i).each(function(){var t=e(this),i=t.offset().top,s=t.height(),o=t.data("inview")||!1;if(r>i+s||r+n<i){if(o){t.data("inview",!1);t.trigger("inview",[!1])}}else if(r<i+s&&!o){t.data("inview",!0);t.trigger("inview",[!0])}})});e(function(){e(window).scroll()})})(jQuery);