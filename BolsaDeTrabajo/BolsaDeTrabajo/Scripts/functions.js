$(function() {
	

	$('.tab-open').on('click', function(){
		$(this).toggleClass('opened');

		if($(this).hasClass('opened')) {
			$(this).closest('.container-tab').find('.content-tab').show( "slow" );
		} else {
			$(this).closest('.container-tab').find('.content-tab').hide("slow");
		}
	});
});