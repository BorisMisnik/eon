$(function(){
	// fruct
	// var s3_2 = $('.s3-2');
	// var s3_10 = $('.s3-10');
	// var s3_11 = $('.s3-11');
	// var s3_9 = $('.s3-9');
	// var s3_8 = $('.s3-8');
	$('.hover-orange').hide();

	// $('span[name="fruit"]').hover(function(){

	// 	s3_2.css({
	// 		'background-image' : 'url(img/step2.png)',
	// 		'background-position' : '-1px -466px'
	// 	});

	// 	s3_10.css({
	// 		'background-image' : 'url(img/step2.png)',
	// 		'background-position' : '-155px -469px'
	// 	});

	// 	s3_11.css({
	// 		'background-image' : 'url(img/step2.png)',
	// 		'background-position' : '-7px -617px'
	// 	});

	// 	s3_9.css({
	// 		'background-image' : 'url(img/step2.png)',
	// 		'background-position' : '-153px -617px',
	// 		'height' : '158px',

	// 	});

	// 	$('.hover-orange').show();

	// }, function(){

	// 	s3_2.css({
	// 		'background-image' : 'url(img/step3.png)',
	// 		'background-position': '0px -466px'
	// 	});

	// 	s3_10.css({
	// 		'background-image' : 'url(img/step3.png)',
	// 		'background-position': '-155px -469px'
	// 	});

	// 	s3_11.css({
	// 		'background-image' : 'url(img/step3.png)',
	// 		'background-position' : '-6px -618px'
	// 	});

	// 	s3_9.css({
	// 		'background-image' : 'url(img/step3.png)',
	// 		'background-position' : '-153px -618px',
	// 		'height' : '155px'
	// 	});

	// 	$('.hover-orange').hide();

	// });
	
	//plane
	var s6_1 = $('.s6-1');
	var s6_0 = $('.s6-0');
	var s4_3 = $('.s4-3');
	var s4_2 = $('.s4-2');

	$('span[name="plane"]').hover(function(){

		s6_1.css({
			'background-position' : '0px -301px',
			'background-image' : 'url(img/step4.png)'
		});

		s6_0.css({
			'background-position' : '-150px -301px',
			'background-image' : 'url(img/step4.png)'
		});

		s4_3.css({
			'background-image' : 'url(img/step4.png)',
			'background-position' : '-155px -465px',
		});

		s4_2.css({
			'background-image' : 'url(img/step4.png)',
			'background-position' : '0px -465px',
		});

	}, function(){

		s6_1.css({
			'background-position' : '-1px -302px',
			'background-image' : 'url(img/step5.png)'
		});

		s6_0.css({
			'background-position' : '-150px -302px',
			'background-image' : 'url(img/step5.png)'
		});

		s4_3.css({
			'background-image' : 'url(img/step3-b.png)',
			'background-position' : '-155px -465px',
		});

		s4_2.css({
			'background-image' : 'url(img/step3-b.png)',
			'background-position' : '0px -465px',
		});
	});
	// bridge
	$('span[name="bridge"]').hover(function(){

		if( $('.s8-0').css('opacity') == '1' )
			$('.s8-0').css('opacity', '0')

	}, function(){
		if( $('.s7-0').css('opacity') == '1' )
			$('.s8-0').css('opacity', '1')
	})
})