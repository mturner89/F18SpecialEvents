$(document).ready(function() {		  
	$(".nav-collapse").click(function() {
			$(".sidebar-wrapper").fadeIn(600);
			$(".sidebar-wrapper").toggleClass('show');
			if ($(".sidebar-wrapper").hasClass('show')) {
			  $(".sidebar-wrapper").css({
				display: "block"
			  });
			} 
			else {
			  $(".sidebar-wrapper").css({
				display: "none"
			  });
			  $(".sidebar-wrapper").fadeOut(300);
			}
	});
	$("#site-container").click(function() {
			$(".sidebar-wrapper").removeClass('show');
			$(".sidebar-wrapper").css({display:"none"});
			$(".sidebar-wrapper").fadeOut(300);
	});
});
