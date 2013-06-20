$(function(){
	// bike
	$('span[name="bike"]').hover(function(){

		$('span[name="bike"]').parent().addClass('hover');

	}, function(){
		if( !$('span[name="bike"]').parent().is('.static') )
			$('span[name="bike"]').parent().removeClass('hover');

	});

	// micro
	$('span[name="micro"]').hover(function(){
		$('span[name="micro"]').addClass('hover');

	}, function(){
		if( !$('span[name="micro"]').is('.static') )
			$('span[name="micro"]').removeClass('hover');

	});

	// photo
	$('span[name="photo"]').hover(function(){
		$('span[name="photo"]').addClass('hover');

	}, function(){
		if( !$('span[name="photo"]').is('.static') )
			$('span[name="photo"]').removeClass('hover');
	});

	// life
	$('span[name="oneLife"]').hover(function(){
		$('span[name="oneLife"]').addClass('hover');

	}, function(){
		if( !$('span[name="oneLife"]').is('.static') )
			$('span[name="oneLife"]').removeClass('hover');
	});

	// babina
	$('span[name="babina"]').hover(function(){
		$('span[name="babina"]').addClass('hover');

	}, function(){
		if( !$('span[name="babina"]').is('.static') )
			$('span[name="babina"]').removeClass('hover');
	});
	// fruc
	$('span[name="fruc"]').hover(function(){
		$('span[name="fruc"]').addClass('hover');

	}, function(){
		if( !$('span[name="fruc"]').is('.static') )
			$('span[name="fruc"]').removeClass('hover');
	});	
})