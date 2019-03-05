$(document).ready(function(){
	
	$('#button-16').click(function() {
		$(this).animate({
			opacity: 0.1,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

		$('#button-3').click(function() {
			$(this).animate({
				opacity: 0.5,
				marginLeft: '0.6in',
				fontSize: '30px',
				borderWidth: '10px'
			}, 1000 );
		});
		$('#button-49').click(function() {
			$(this).animate({
				opacity: 0.3,
				marginLeft: '0.3in',
				fontSize: '25px',
				borderWidth: '5px'
			}, 500 );
		});
});

