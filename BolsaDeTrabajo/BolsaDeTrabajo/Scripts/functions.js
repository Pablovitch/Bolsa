$(function() {
	$(document).on("click", ".tab-open", function(){
		$(this).toggleClass('opened');

		if($(this).hasClass('opened')) {
			$(this).closest('.container-tab').find('.content-tab').show("slow");
		} else {
			$(this).closest('.container-tab').find('.content-tab').hide("slow");
		}
	});
});