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