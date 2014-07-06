function setHeaderHeights() {
	var heights = [];
	$('h2[data-header]').each(function() {
		$(this).css('height', '');
		heights.push($(this).height());
	});
	$('h2[data-header]').height(Math.max.apply(Math, heights));
}

$(window).bind("load", setHeaderHeights);
$(window).bind("resize", setHeaderHeights);

$(document).ready(function(){
	$("form").on("submit", function(e) {
	  e.preventDefault();
	  var form = $(this);

	  $.ajax({
		  type: "POST",
		  url: "/contact.php",
		  data: form.serialize(),
			success: function(msg) {
				// exported status
				$('.msg').remove();
				if (msg.status === 'success') {
					form.before("<p class='msg success'>Thank you for your interest!</p>");
				} else {
					form.before("<p class='msg fail'>Unfortunately, there was a problem. Did you fill in all the fields?</p>");
				}
			}
		});
	});
});