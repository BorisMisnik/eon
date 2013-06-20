<<<<<<< HEAD
 app.initGinger = function(){

	app.elements.ginger.hide();

	app.gElement = {
		clock : $('span[name="clock"]'),
		clockText: $('.clock, .sClock'),
		car : $('span[name="car"]'),
		carText : $('.car, .sCar'),
		one : $('span[name="one"]'),
		oneText : $('.sOne, .one'),
		boot: $('span[name="boot"]'),
		bootText : $('.sBoot, .boot'),
		fru: $('span[name="fru"]'),
		fruText : $('.sFru, .fru'),
		mobile : $('span[name="mobile"]'),
		mobileText : $('.mobile, .sMobile'),
		buttleText : $('#ginger .buttle, #ginger .sButtle')
	}

	app.gingerHover();
	app.showGinger();
	app.clock();
	app.car();
	app.one();
	app.boot();
	app.fru();
	app.mobile();
	app.buttleGinger();
	app.gingerClick();
};
app.animateGinger = function(){
	var s1 = app.elements.ginger.find('.s1');
	s1.css({
		'position' : 'relative',
		'top' : '1300px'
	});

	app.elements.citrus.hide();
	app.elements.almond.hide();
	app.elements.ginger.show();
	app.elements.container.height(5500);

	app.gElement.clockText.show().css('top', '-500px');
	app.gElement.carText.show().css('top', '-500px');
	app.gElement.oneText.show().css('top', '-500px');
	app.gElement.bootText.show().css('top', '-500px');
	app.gElement.fruText.show().css('top', '-500px');
	app.gElement.mobileText.show().css('top', '-500px');
	app.gElement.buttleText.show().css('top', '-500px');

	$('html').getNiceScroll().resize();
	app.controller.removeTween('body');
	app.startGinger();

	TweenMax.staggerTo(s1, 0.1,{
		'top' : 0
	}, 0.1);
}
app.showGinger= function(){

	var blue = $('.blue');
	var blueImg = blue.find('img');
	blueImg.on({
		click : function(e){
			e.preventDefault();
			var s1 = app.elements.ginger.find('.s1');
			s1.css({
				'position' : 'relative',
				'top' : '1300px'
			});

			app.elements.citrus.hide();
			app.elements.almond.hide();
			app.elements.ginger.show();
			app.elements.container.height(5500);

			app.gElement.clockText.show().css('top', '-500px');
			app.gElement.carText.show().css('top', '-500px');
			app.gElement.oneText.show().css('top', '-500px');
			app.gElement.bootText.show().css('top', '-500px');
			app.gElement.fruText.show().css('top', '-500px');
			app.gElement.mobileText.show().css('top', '-500px');
			app.gElement.buttleText.show().css('top', '-500px');

			app.elements.htmlBody.animate({
				'scrollTop' : 925
			}, 300);
			
			$('html').getNiceScroll().resize();
			app.controller.removeTween('body');
			app.startGinger();

			TweenMax.staggerTo(s1, 0.1,{
				'top' : 0
			}, 0.1);
		},
		mouseenter : function(){
			TweenMax.to(blue, .3, {
				'marginTop' : '-50'
			});
		},
		mouseleave : function(){
			if( app.elements.ginger.is( ':visible' ) ) return

			TweenMax.to(blue, .3, {
				marginTop : 0
			});	
		}
	});
};

app.gingerClick = function(){

	$('.logo-scroll').find('.box.b').on('click', function(){
		if( $(this).is( '.now' ) ) return;

		app.elements.htmlBody.animate({
			'scrollTop' : 940
		}, 600, function(){
			app.animateGinger();
		});

	});

}

app.clock = function(){

	$('.sClock').on('click', function(e){

		e.preventDefault();

		if(  $('.clock').is(':visible') ){
			$('.clock').hide();
		}
		else{
			$('.clock').show();
		}

	});

	$('span[name="clock"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3500
		}, 400)
	});


};
app.car = function(){

	$('.sCar').on('click', function(e){

		e.preventDefault();

		if( $('.car').is(':visible') ){
			$('.car').hide();
		}
		else{
			$('.car').show();
		}

	});

	$('span[name="car"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2900
		}, 400)
	});

};
app.one = function(){

	$('.sOne').on('click', function(e){

		e.preventDefault();

		if( $('.one').is(':visible') ){
			$('.one').hide();
		}
		else{
			$('.one').show();
		}

	});

	$('span[name="one"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3900
		}, 400)
	});

};
app.boot = function(){

	$('.sBoot').on('click', function(e){

		e.preventDefault();

		if( $('.boot').is(':visible') ){
			$('.boot').hide();
		}
		else{
			$('.boot').show();
		}

	});

	$('span[name="boot"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2500
		}, 400)
	});
};
app.fru = function(){

	$('.sFru').on('click', function(e){

		e.preventDefault();

		if( $('.fru').is( ':visible' ) ){
			$('.fru').hide();
		}
		else{
			$('.fru').show();
		}

	});

	$('span[name="fru"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1500
		}, 400)
	});
};

app.mobile = function(){

	$('.sMobile').on('click', function(e){

		e.preventDefault();
		if( $('.mobile').is( ':visible' )){
			$('.mobile').hide();
		}
		else{
			$('.mobile').show();
		}

	});

	$('span[name="mobile"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1900
		}, 400)
	});
}
app.buttleGinger = function(){

	$('#ginger .sButtle').on('click', function(e){
		e.preventDefault();

		if( $('#ginger .buttle').is( ':visible' ) ){
			$('#ginger .buttle').hide();
		}
		else{
			$('#ginger .buttle').show();
		}

	});
}
app.gingerHover = function(){

	//clock
	app.gElement.clock.hover(function(){

		app.gElement.clock.addClass('hover');

	}, function(){
		if( !app.gElement.clock.is('.static') )
			app.gElement.clock.removeClass('hover');

	});

	// one
	app.gElement.one.hover(function(){
		app.gElement.one.addClass('hover');

	}, function(){
		if( !app.gElement.one.is('.static') )
			app.gElement.one.removeClass('hover');

	});

	// car
	app.gElement.car.hover(function(){
		app.gElement.car.addClass('hover');

	}, function(){
		if( !app.gElement.car.is('.static') )
			app.gElement.car.removeClass('hover');
	});

	// boot
	app.gElement.boot.hover(function(){
		app.gElement.boot.addClass('hover');

	}, function(){
		if( !app.gElement.boot.is('.static') )
			app.gElement.boot.removeClass('hover');
	});

	// fru
	app.gElement.fru.hover(function(){
		app.gElement.fru.addClass('hover');

	}, function(){
		if( !app.gElement.fru.is('.static') )
			app.gElement.fru.removeClass('hover');
	});

	// mobile
	app.gElement.mobile.hover(function(){
		app.gElement.mobile.addClass('hover');

	}, function(){
		if( !app.gElement.mobile.is('.static') )
			app.gElement.mobile.removeClass('hover');
	});	

}

app.scrollGinger = function(scroll){

	if( !app.elements.ginger.is(':visible') && !app.elements.body.is( ':animated' )) return;

	// fruct
	if( scroll >= 1400 && scroll < 1600 
		&& app.gElement.fruText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.fruText ) ){
		console.log( 'fruc' )
		TweenMax.to(app.gElement.fruText, .4, {
			top: 117
		});
		app.gElement.fru.addClass('hover static');
	} 
	else if( ( scroll >= 1700 || scroll <= 1300 )
			&& app.gElement.fruText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.fruText )){
		TweenMax.to(app.gElement.fruText, .4, {
			top: -500
		});
		app.gElement.fru.removeClass('hover static');
	}

	// mobile
	if( scroll > 1800 && scroll <= 2200  
		&& app.gElement.mobileText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.mobileText ) ){
		console.log( 'mobile' )
		TweenMax.to(app.gElement.mobileText, .4, {
			top: 117
		});
		app.gElement.mobile.addClass('hover static');
	} 
	else if( ( scroll >= 2300 || scroll < 1800 ) 
			&& app.gElement.mobileText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.mobileText )){
		TweenMax.to(app.gElement.mobileText, .4, {
			top: -500
		});
		app.gElement.mobile.removeClass('hover static');
	}

	// boot
	if( scroll > 2400 && scroll < 2700 
		&& app.gElement.bootText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.bootText ) ){
		console.log( 'boot' )
		TweenMax.to(app.gElement.bootText, .4, {
			top: 117
		});
		app.gElement.boot.addClass('hover static');
	} 
	else if( ( scroll >= 2800 || scroll <= 2300 )
			&& app.gElement.bootText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.bootText )){
		TweenMax.to(app.gElement.bootText, .4, {
			top: -500
		});
		app.gElement.boot.removeClass('hover static');
	}

	// car
	if( scroll > 2800 && scroll <= 3200 
		&& app.gElement.carText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.carText ) ){
		console.log( 'car' )
		TweenMax.to(app.gElement.carText, .4, {
			top: 117
		});
		app.gElement.car.addClass('hover static');
	} 
	else if( ( scroll >= 3300 || scroll <= 2700 )
			&& app.gElement.carText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.carText )){
		TweenMax.to(app.gElement.carText, .4, {
			top: -500
		});
		app.gElement.car.removeClass('hover static');
	}

	// clock
	if( scroll > 3400 && scroll < 3600
		&& app.gElement.clockText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.clockText ) ){
		console.log( 'clock' )
		TweenMax.to(app.gElement.clockText, .4, {
			top: 117
		});
		app.gElement.clock.addClass('hover static');
	} 
	else if( ( scroll >= 3700 || scroll <= 3300 )
			&& app.gElement.clockText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.clockText )){
		TweenMax.to(app.gElement.clockText, .4, {
			top: -500
		});
		app.gElement.clock.removeClass('hover static');
	}

	// one
	if( scroll > 3800 && scroll < 4100 
		&& app.gElement.oneText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.oneText ) ){
		console.log( 'one' )
		TweenMax.to(app.gElement.oneText, .4, {
			top: 117
		});
		app.gElement.one.addClass('hover static');
	} 
	else if( ( scroll >= 4200 || scroll <= 3700 )
			&& app.gElement.oneText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.oneText )){
		TweenMax.to(app.gElement.oneText, .4, {
			top: -500
		});
		app.gElement.one.removeClass('hover static');
	}

	// buttle
	if( scroll > 4400 && scroll < 4800 
		&& app.gElement.buttleText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.buttleText ) ){
		console.log( 'buttle' )
		TweenMax.to(app.gElement.buttleText, .4, {
			top: 117
		});
	} 
	else if( ( scroll <= 4100) 
			&& app.gElement.buttleText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.buttleText )){
		TweenMax.to(app.gElement.buttleText, .4, {
			top: -500
		});
	}
}
app.startGinger = function(){

	if( !app.elements.ginger.is( ':visible' ) ) return

	var fru = [
		$('.st4-2'), $('.st4-3'), $('.st4-8'), $('.st4-9')
	];

	var mobile = [
		$('.st4-4'), $('.st4-10')
	];

	var boot = [
		$('.st4-13'), $('.st4-0'), $('.st4-1'),
		$('.st4-6'), $('.st4-7'), $('.st4-12')
	];

	var car = [
		$('.st4-19'), $('.st4-18'), $('.st4-24'), $('.st4-25'),
		$('.st4-26'), $('.st4-30'), $('.st4-31'), $('.st4-32')
	];

	var clock = [
		$('.st4-21'), $('.st4-22'),
		$('.st4-27'), $('.st4-28')
	];

	var one = [
		$('.st4-15'), $('.st4-16')
	];


	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-29'), car[2], car[3], car[4], clock[2], clock[3] ],.5,{
			top: 615
		}),
		0,
		1300);

	this.controller.addTween('body',
		TweenMax.to( [ fru[0], fru[1], mobile[0], boot[1], boot[2], $('.st4-5')], .4,{
			top: 0
		}),
		0,
		1400);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-36'), $('.st4-40'), $('.st4-39'), $('.st4-37'), $('.st4-38'), $('.st4-41'), $('.st5-1') ],.5,{
			top: 925
		}),
		0,
		1800);


	this.controller.addTween('body',
		TweenMax.to( [  fru[2], fru[3], mobile[1], boot[3], boot[4], $('.st4-11') ], .4,{
			top: 155
		}),
		0,
		2200);

	this.controller.addTween('body',
		TweenMax.to( [  boot[5], boot[0] ], .4,{
			top: 309
		}),
		0,
		2600);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-35'), car[5], car[6], car[7], $('.st4-33'), $('.st4-30'), $('.st4-34') ],.5,{
			top: 770
		}),
		0,
		3000);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-17'),  $('.st4-14'), one[0], one[1] ],.5,{
			top: 310
		}),
		0,
		3400);

	this.controller.addTween('body',
		TweenMax.to( [  car[0], car[1], clock[0], clock[1], $('.st4-20'), $('.st4-23') ], .4,{
			top: 465
		}),
		0,
		3800);

	this.controller.addTween('body', 
		TweenMax.to($('#ginger .scrollBox'),.5,{
			top: 0
		}),
		3800,
		0);
=======
 app.initGinger = function(){

	app.elements.ginger.hide();

	app.gElement = {
		clock : $('span[name="clock"]'),
		clockText: $('.clock, .sClock'),
		car : $('span[name="car"]'),
		carText : $('.car, .sCar'),
		one : $('span[name="one"]'),
		oneText : $('.sOne, .one'),
		boot: $('span[name="boot"]'),
		bootText : $('.sBoot, .boot'),
		fru: $('span[name="fru"]'),
		fruText : $('.sFru, .fru'),
		mobile : $('span[name="mobile"]'),
		mobileText : $('.mobile, .sMobile'),
		buttleText : $('#ginger .buttle, #ginger .sButtle')
	}

	app.gingerHover();
	app.showGinger();
	app.clock();
	app.car();
	app.one();
	app.boot();
	app.fru();
	app.mobile();
	app.buttleGinger();
	app.gingerClick();
};
app.animateGinger = function(){
	var s1 = app.elements.ginger.find('.s1');
	s1.css({
		'position' : 'relative',
		'top' : '1300px'
	});

	app.elements.citrus.hide();
	app.elements.almond.hide();
	app.elements.ginger.show();
	app.elements.container.height(5500);

	app.gElement.clockText.show().css('top', '-500px');
	app.gElement.carText.show().css('top', '-500px');
	app.gElement.oneText.show().css('top', '-500px');
	app.gElement.bootText.show().css('top', '-500px');
	app.gElement.fruText.show().css('top', '-500px');
	app.gElement.mobileText.show().css('top', '-500px');
	app.gElement.buttleText.show().css('top', '-500px');

	$('html').getNiceScroll().resize();
	app.controller.removeTween('body');
	app.startGinger();

	TweenMax.staggerTo(s1, 0.1,{
		'top' : 0
	}, 0.1);
}
app.showGinger= function(){

	var blue = $('.blue');
	var blueImg = blue.find('img');
	blueImg.on({
		click : function(e){
			e.preventDefault();
			var s1 = app.elements.ginger.find('.s1');
			s1.css({
				'position' : 'relative',
				'top' : '1300px'
			});

			app.elements.citrus.hide();
			app.elements.almond.hide();
			app.elements.ginger.show();
			app.elements.container.height(5500);

			app.gElement.clockText.show().css('top', '-500px');
			app.gElement.carText.show().css('top', '-500px');
			app.gElement.oneText.show().css('top', '-500px');
			app.gElement.bootText.show().css('top', '-500px');
			app.gElement.fruText.show().css('top', '-500px');
			app.gElement.mobileText.show().css('top', '-500px');
			app.gElement.buttleText.show().css('top', '-500px');

			app.elements.htmlBody.animate({
				'scrollTop' : 925
			}, 300);
			
			$('html').getNiceScroll().resize();
			app.controller.removeTween('body');
			app.startGinger();

			TweenMax.staggerTo(s1, 0.1,{
				'top' : 0
			}, 0.1);
		},
		mouseenter : function(){
			TweenMax.to(blue, .3, {
				'marginTop' : '-50'
			});
		},
		mouseleave : function(){
			if( app.elements.ginger.is( ':visible' ) ) return

			TweenMax.to(blue, .3, {
				marginTop : 0
			});	
		}
	});
};

app.gingerClick = function(){

	$('.logo-scroll').find('.box.b').on('click', function(){
		if( $(this).is( '.now' ) ) return;

		app.elements.htmlBody.animate({
			'scrollTop' : 940
		}, 600, function(){
			app.animateGinger();
		});

	});

}

app.clock = function(){

	$('.sClock').on('click', function(e){

		e.preventDefault();

		if(  $('.clock').is(':visible') ){
			$('.clock').hide();
		}
		else{
			$('.clock').show();
		}

	});

	$('span[name="clock"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3500
		}, 400)
	});


};
app.car = function(){

	$('.sCar').on('click', function(e){

		e.preventDefault();

		if( $('.car').is(':visible') ){
			$('.car').hide();
		}
		else{
			$('.car').show();
		}

	});

	$('span[name="car"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2900
		}, 400)
	});

};
app.one = function(){

	$('.sOne').on('click', function(e){

		e.preventDefault();

		if( $('.one').is(':visible') ){
			$('.one').hide();
		}
		else{
			$('.one').show();
		}

	});

	$('span[name="one"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3900
		}, 400)
	});

};
app.boot = function(){

	$('.sBoot').on('click', function(e){

		e.preventDefault();

		if( $('.boot').is(':visible') ){
			$('.boot').hide();
		}
		else{
			$('.boot').show();
		}

	});

	$('span[name="boot"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2500
		}, 400)
	});
};
app.fru = function(){

	$('.sFru').on('click', function(e){

		e.preventDefault();

		if( $('.fru').is( ':visible' ) ){
			$('.fru').hide();
		}
		else{
			$('.fru').show();
		}

	});

	$('span[name="fru"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1500
		}, 400)
	});
};

app.mobile = function(){

	$('.sMobile').on('click', function(e){

		e.preventDefault();
		if( $('.mobile').is( ':visible' )){
			$('.mobile').hide();
		}
		else{
			$('.mobile').show();
		}

	});

	$('span[name="mobile"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1900
		}, 400)
	});
}
app.buttleGinger = function(){

	$('#ginger .sButtle').on('click', function(e){
		e.preventDefault();

		if( $('#ginger .buttle').is( ':visible' ) ){
			$('#ginger .buttle').hide();
		}
		else{
			$('#ginger .buttle').show();
		}

	});
}
app.gingerHover = function(){

	//clock
	app.gElement.clock.hover(function(){

		app.gElement.clock.addClass('hover');

	}, function(){
		if( !app.gElement.clock.is('.static') )
			app.gElement.clock.removeClass('hover');

	});

	// one
	app.gElement.one.hover(function(){
		app.gElement.one.addClass('hover');

	}, function(){
		if( !app.gElement.one.is('.static') )
			app.gElement.one.removeClass('hover');

	});

	// car
	app.gElement.car.hover(function(){
		app.gElement.car.addClass('hover');

	}, function(){
		if( !app.gElement.car.is('.static') )
			app.gElement.car.removeClass('hover');
	});

	// boot
	app.gElement.boot.hover(function(){
		app.gElement.boot.addClass('hover');

	}, function(){
		if( !app.gElement.boot.is('.static') )
			app.gElement.boot.removeClass('hover');
	});

	// fru
	app.gElement.fru.hover(function(){
		app.gElement.fru.addClass('hover');

	}, function(){
		if( !app.gElement.fru.is('.static') )
			app.gElement.fru.removeClass('hover');
	});

	// mobile
	app.gElement.mobile.hover(function(){
		app.gElement.mobile.addClass('hover');

	}, function(){
		if( !app.gElement.mobile.is('.static') )
			app.gElement.mobile.removeClass('hover');
	});	

}

app.scrollGinger = function(scroll){

	if( !app.elements.ginger.is(':visible') && !app.elements.body.is( ':animated' )) return;

	// fruct
	if( scroll >= 1400 && scroll < 1600 
		&& app.gElement.fruText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.fruText ) ){
		console.log( 'fruc' )
		TweenMax.to(app.gElement.fruText, .4, {
			top: 117
		});
		app.gElement.fru.addClass('hover static');
	} 
	else if( ( scroll >= 1700 || scroll <= 1300 )
			&& app.gElement.fruText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.fruText )){
		TweenMax.to(app.gElement.fruText, .4, {
			top: -500
		});
		app.gElement.fru.removeClass('hover static');
	}

	// mobile
	if( scroll > 1800 && scroll <= 2200  
		&& app.gElement.mobileText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.mobileText ) ){
		console.log( 'mobile' )
		TweenMax.to(app.gElement.mobileText, .4, {
			top: 117
		});
		app.gElement.mobile.addClass('hover static');
	} 
	else if( ( scroll >= 2300 || scroll < 1800 ) 
			&& app.gElement.mobileText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.mobileText )){
		TweenMax.to(app.gElement.mobileText, .4, {
			top: -500
		});
		app.gElement.mobile.removeClass('hover static');
	}

	// boot
	if( scroll > 2400 && scroll < 2700 
		&& app.gElement.bootText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.bootText ) ){
		console.log( 'boot' )
		TweenMax.to(app.gElement.bootText, .4, {
			top: 117
		});
		app.gElement.boot.addClass('hover static');
	} 
	else if( ( scroll >= 2800 || scroll <= 2300 )
			&& app.gElement.bootText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.bootText )){
		TweenMax.to(app.gElement.bootText, .4, {
			top: -500
		});
		app.gElement.boot.removeClass('hover static');
	}

	// car
	if( scroll > 2800 && scroll <= 3200 
		&& app.gElement.carText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.carText ) ){
		console.log( 'car' )
		TweenMax.to(app.gElement.carText, .4, {
			top: 117
		});
		app.gElement.car.addClass('hover static');
	} 
	else if( ( scroll >= 3300 || scroll <= 2700 )
			&& app.gElement.carText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.carText )){
		TweenMax.to(app.gElement.carText, .4, {
			top: -500
		});
		app.gElement.car.removeClass('hover static');
	}

	// clock
	if( scroll > 3400 && scroll < 3600
		&& app.gElement.clockText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.clockText ) ){
		console.log( 'clock' )
		TweenMax.to(app.gElement.clockText, .4, {
			top: 117
		});
		app.gElement.clock.addClass('hover static');
	} 
	else if( ( scroll >= 3700 || scroll <= 3300 )
			&& app.gElement.clockText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.clockText )){
		TweenMax.to(app.gElement.clockText, .4, {
			top: -500
		});
		app.gElement.clock.removeClass('hover static');
	}

	// one
	if( scroll > 3800 && scroll < 4100 
		&& app.gElement.oneText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.oneText ) ){
		console.log( 'one' )
		TweenMax.to(app.gElement.oneText, .4, {
			top: 117
		});
		app.gElement.one.addClass('hover static');
	} 
	else if( ( scroll >= 4200 || scroll <= 3700 )
			&& app.gElement.oneText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.oneText )){
		TweenMax.to(app.gElement.oneText, .4, {
			top: -500
		});
		app.gElement.one.removeClass('hover static');
	}

	// buttle
	if( scroll > 4400 && scroll < 4800 
		&& app.gElement.buttleText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.gElement.buttleText ) ){
		console.log( 'buttle' )
		TweenMax.to(app.gElement.buttleText, .4, {
			top: 117
		});
	} 
	else if( ( scroll <= 4100) 
			&& app.gElement.buttleText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.gElement.buttleText )){
		TweenMax.to(app.gElement.buttleText, .4, {
			top: -500
		});
	}
}
app.startGinger = function(){

	if( !app.elements.ginger.is( ':visible' ) ) return

	var fru = [
		$('.st4-2'), $('.st4-3'), $('.st4-8'), $('.st4-9')
	];

	var mobile = [
		$('.st4-4'), $('.st4-10')
	];

	var boot = [
		$('.st4-13'), $('.st4-0'), $('.st4-1'),
		$('.st4-6'), $('.st4-7'), $('.st4-12')
	];

	var car = [
		$('.st4-19'), $('.st4-18'), $('.st4-24'), $('.st4-25'),
		$('.st4-26'), $('.st4-30'), $('.st4-31'), $('.st4-32')
	];

	var clock = [
		$('.st4-21'), $('.st4-22'),
		$('.st4-27'), $('.st4-28')
	];

	var one = [
		$('.st4-15'), $('.st4-16')
	];


	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-29'), car[2], car[3], car[4], clock[2], clock[3] ],.5,{
			top: 615
		}),
		0,
		1300);

	this.controller.addTween('body',
		TweenMax.to( [ fru[0], fru[1], mobile[0], boot[1], boot[2], $('.st4-5')], .4,{
			top: 0
		}),
		0,
		1400);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-36'), $('.st4-40'), $('.st4-39'), $('.st4-37'), $('.st4-38'), $('.st4-41'), $('.st5-1') ],.5,{
			top: 925
		}),
		0,
		1800);


	this.controller.addTween('body',
		TweenMax.to( [  fru[2], fru[3], mobile[1], boot[3], boot[4], $('.st4-11') ], .4,{
			top: 155
		}),
		0,
		2200);

	this.controller.addTween('body',
		TweenMax.to( [  boot[5], boot[0] ], .4,{
			top: 309
		}),
		0,
		2600);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-35'), car[5], car[6], car[7], $('.st4-33'), $('.st4-30'), $('.st4-34') ],.5,{
			top: 770
		}),
		0,
		3000);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st4-17'),  $('.st4-14'), one[0], one[1] ],.5,{
			top: 310
		}),
		0,
		3400);

	this.controller.addTween('body',
		TweenMax.to( [  car[0], car[1], clock[0], clock[1], $('.st4-20'), $('.st4-23') ], .4,{
			top: 465
		}),
		0,
		3800);

	this.controller.addTween('body', 
		TweenMax.to($('#ginger .scrollBox'),.5,{
			top: 0
		}),
		3800,
		0);
>>>>>>> b0a3f17aa6e0e7831a0c1e96900d89995ebafe2d
}