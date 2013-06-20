<<<<<<< HEAD
app.initAlmond = function(){

	app.elements.almond.hide();

	app.aElement = {
		micro : $('span[name="micro"]'),
		microText: $('.micro, .sMicro'),
		bike : $('span[name="bike"]'),
		bikeText : $('.bike, .sBike'),
		photo : $('span[name="photo"]'),
		photoText : $('.sPhoto, .photo'),
		life: $('span[name="oneLife"]'),
		lifeText : $('.sOneLife, .oneLife'),
		fru: $('span[name="fruc"]'),
		fruText : $('.sFruc, .fruc'),
		babina : $('span[name="babina"]'),
		babinaText : $('.babina, .sBabina'),
		buttleText : $('#almond .buttle, #almond .sButtle')
	}

	app.showAlmond();
	app.startAlmond();
	app.almondHover();
	app.micro();
	app.bike();
	app.photo();
	app.oneLife();
	app.fruc();
	app.babina();
	app.almondButtle();
	app.almondClick();
};
app.animateAlmond = function(){

	var s1 = app.elements.almond.find('.s1');
	s1.css({
		'position' : 'relative',
		'top' : '1300px'
	});

	app.elements.citrus.hide();
	app.elements.ginger.hide();
	app.elements.almond.show();
	app.elements.container.height(5500);

	app.aElement.microText.show().css('top', '-500px');
	app.aElement.bikeText.show().css('top', '-500px');
	app.aElement.photoText.show().css('top', '-500px');
	app.aElement.lifeText.show().css('top', '-500px');
	app.aElement.fruText.show().css('top', '-500px');
	app.aElement.babinaText.show().css('top', '-500px');
	app.aElement.buttleText.show().css('top', '-500px');

	$('html').getNiceScroll().resize();
	app.controller.removeTween('body');
	app.startAlmond();

	TweenMax.staggerTo(s1, 0.1,{
		'top' : 0
	}, 0.1);

}
app.showAlmond= function(){

	var yellow = $('.yellow');
	var yellowImg = yellow.find('img');

	yellowImg.on({
		click : function(e){
			e.preventDefault();
			var s1 = app.elements.almond.find('.s1');
			s1.css({
				'position' : 'relative',
				'top' : '1300px'
			});
			app.elements.citrus.hide();
			app.elements.ginger.hide();
			app.elements.almond.show();
			app.elements.container.height(5500);

			app.aElement.microText.show().css('top', '-500px');
			app.aElement.bikeText.show().css('top', '-500px');
			app.aElement.photoText.show().css('top', '-500px');
			app.aElement.lifeText.show().css('top', '-500px');
			app.aElement.fruText.show().css('top', '-500px');
			app.aElement.babinaText.show().css('top', '-500px');
			app.aElement.buttleText.show().css('top', '-500px');

			app.elements.htmlBody.animate({
				'scrollTop' : 925
			}, 300);


			$('html').getNiceScroll().resize();
			app.controller.removeTween('body');
			app.startAlmond();

			TweenMax.staggerTo(s1, 0.1,{
				'top' : 0
			}, 0.1);

		},
		mouseenter : function(){
			TweenMax.to(yellow, .3, {
				'marginTop' : '-140'
			});
		},
		mouseleave : function(){
			if( app.elements.almond.is( ':visible' ) ) return

			TweenMax.to(yellow, .3, {
				'marginTop' : '-100'
			});	
		}
	});

};

app.almondClick = function(){

	$('.logo-scroll').find('.box.y').on('click', function(){
		if( $(this).is( '.now' ) ) return;

		app.elements.htmlBody.animate({
			'scrollTop' : 940
		}, 600, function(){
			app.animateAlmond();
		});

	});

}
app.micro = function(){

	$('.sMicro').on('click', function(e){

		e.preventDefault();

		if(  $('.micro').is(':visible') ){
			$('.micro').hide();
		}
		else{
			$('.micro').show();
		}

	});

	$('span[name="micro"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1900
		}, 400)
	});
};

app.bike = function(){

	$('.sBike').on('click', function(e){

		e.preventDefault();

		if(  $('.bike').is( ':visible' ) ){
			$('.bike').hide();
		}
		else{
			$('.bike').show();
		}

	});

	$('span[name="bike"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2900
		}, 400)

	});

};

app.oneLife = function(){

	$('.sOneLife').on('click', function(e){

		e.preventDefault();

		if(  $('.oneLife').is(':visible') ){
			$('.oneLife').hide();
		}
		else{
			$('.oneLife').show();
		}

	});

	$('span[name="oneLife"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3900
		}, 400)
	});

};

// 4850
app.photo = function(){

	$('.sPhoto').on('click', function(e){

		e.preventDefault();

		if(  $('.photo').is(':visible') ){
			$('.photo').hide();
		}
		else{
			$('.photo').show();
		}

	});

	$('span[name="photo"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3500
		}, 400)
	});

}

app.fruc = function(){

	$('.sFruc').on('click', function(e){

		e.preventDefault();

		if(  $('.fruc').is(':visible') ){
			$('.fruc').hide();
		}

		else{
			$('.photo').show();
		}

	});

	$('span[name="fruc"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1500
		}, 400)

	});
}
// 5300
app.babina = function(){

	$('.sBabina').on('click', function(e){

		e.preventDefault();

		if(  $('.babina').is(':visible') ){
			$('.babina').hide();
		}
		else{
			$('.babina').show();
		}

	});

	$('span[name="babina"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2600
		}, 400)
	});
};

app.almondButtle = function(){

	$('#almond .sButtle').on('click', function(e){

		e.preventDefault();

		if(  $('#almond .buttle').is(':visible') ){
			$('#almond .buttle').hide();
		}
		else{
			$('#almond .buttle').show();
		}

	});

}
app.almondHover = function(){

	app.aElement.bike.hover(function(){

		app.aElement.bike.parent().addClass('hover');

	}, function(){
		if( !app.aElement.bike.parent().is('.static') )
			app.aElement.bike.parent().removeClass('hover');

	});

	// micro
	app.aElement.micro.hover(function(){
		app.aElement.micro.addClass('hover');

	}, function(){
		if( !app.aElement.micro.is('.static') )
			app.aElement.micro.removeClass('hover');

	});

	// photo
	app.aElement.photo.hover(function(){
		app.aElement.photo.addClass('hover');

	}, function(){
		if( !app.aElement.photo.is('.static') )
			app.aElement.photo.removeClass('hover');
	});

	// life
	app.aElement.life.hover(function(){
		app.aElement.life.addClass('hover');

	}, function(){
		if( !app.aElement.life.is('.static') )
			app.aElement.life.removeClass('hover');
	});

	// babina
	app.aElement.babina.hover(function(){
		app.aElement.babina.addClass('hover');

	}, function(){
		if( !app.aElement.babina.is('.static') )
			app.aElement.babina.removeClass('hover');
	});
	// fruc
	app.aElement.fru.hover(function(){
		app.aElement.fru.addClass('hover');

	}, function(){
		if( !app.aElement.fru.is('.static') )
			app.aElement.fru.removeClass('hover');
	});	
	
}

app.scrollAlmond = function(scroll){
	
	if( !app.elements.almond.is(':visible') && !TweenMax.isTweening( app.elements.body )) return;

	// fruct
	if( scroll >= 1400 && scroll < 1600 
		&& app.aElement.fruText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.fruText ) ){
		console.log( 'fruc' )
		TweenMax.to(app.aElement.fruText, .4, {
			top: 117
		});
		app.aElement.fru.addClass('hover static');
	} 
	else if( ( scroll >= 1700 || scroll <= 1300 )
			&& app.aElement.fruText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.fruText )){
		TweenMax.to(app.aElement.fruText, .4, {
			top: -500
		});
		app.aElement.fru.removeClass('hover static');
	}
	// micro
	if( scroll > 1800 && scroll <= 2200  
		&& app.aElement.microText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.microText ) ){
		console.log( 'micro' )
		TweenMax.to(app.aElement.microText, .4, {
			top: 117
		});
		app.aElement.micro.addClass('hover static');
	} 
	else if( ( scroll >= 2300 || scroll < 1800 ) 
			&& app.aElement.microText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.microText )){
		TweenMax.to(app.aElement.microText, .4, {
			top: -500
		});
		app.aElement.micro.removeClass('hover static');
	}

	// photo

	if( scroll > 3400 && scroll < 3600  
		&& app.aElement.photoText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.photoText ) ){
		console.log( 'photo' )
		TweenMax.to(app.aElement.photoText, .4, {
			top: 117
		});
		app.aElement.photo.addClass('hover static');
	} 
	else if( ( scroll >= 3700 || scroll <= 3300 )
			&& app.aElement.photoText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.photoText )){
		TweenMax.to(app.aElement.photoText, .4, {
			top: -500
		});
		app.aElement.photo.removeClass('hover static');
	}

	// bike
	if( scroll > 2800 && scroll <= 3200 
		&& app.aElement.bikeText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.bikeText ) ){
		console.log( 'bike' )
		TweenMax.to(app.aElement.bikeText, .4, {
			top: 117
		});
		app.aElement.bike.parent().addClass('hover static');
	} 
	else if( ( scroll >= 3300 || scroll <= 2700 ) 
			&& app.aElement.bikeText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.bikeText )){
		TweenMax.to(app.aElement.bikeText, .4, {
			top: -500
		});
		app.aElement.bike.parent().removeClass('hover static');
	}

	//babina
		if( scroll > 2400 && scroll < 2700 
		&& app.aElement.babinaText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.babinaText ) ){
		console.log( 'bike' )
		TweenMax.to(app.aElement.babinaText, .4, {
			top: 117
		});
		app.aElement.babina.addClass('hover static');
	} 
	else if( ( scroll >= 2800 || scroll <= 2300 ) 
			&& app.aElement.babinaText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.babinaText )){
		TweenMax.to(app.aElement.babinaText, .4, {
			top: -500
		});
		app.aElement.babina.removeClass('hover static');
	}
	// life
	if( scroll > 3800 && scroll < 4100 
		&& app.aElement.lifeText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.lifeText ) ){
		console.log( 'life' )
		TweenMax.to(app.aElement.lifeText, .4, {
			top: 117
		});
		app.aElement.life.addClass('hover static');
	} 
	else if( ( scroll >= 4200 || scroll <= 3700 ) 
			&& app.aElement.lifeText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.bikeText )){
		TweenMax.to(app.aElement.lifeText, .4, {
			top: -500
		});
		app.aElement.life.removeClass('hover static');
	}
	// buttle
	if( scroll > 4400 && scroll < 4800 
		&& app.aElement.buttleText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.buttleText ) ){
		console.log( 'butle' )
		TweenMax.to(app.aElement.buttleText, .4, {
			top: 117
		});	
	} 
	else if( ( scroll <= 4100 ) 
			&& app.aElement.buttleText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.buttleText )){
		TweenMax.to(app.aElement.buttleText, .4, {
			top: -500
		});
	}
}
app.startAlmond = function(){
	if( !app.elements.almond.is( ':visible' ) ) return

	var fruct = [
		$('.st2-0'), $('.st2-1'), $('.st2-2'),
		$('.st2-6'), $('.st2-7'), $('.st2-8'),
		$('.st2-12'), $('.st2-13')
	];

	var micro = [
		$('.st2-9'), $('.st2-10'), $('.st2-15'),
		$('.st2-16')
	];

	var photo = [
		$('.st2-18'),
		$('.st2-19'), $('.st2-24'), $('.st2-25')
	];

	var bike = [
		$('.st2-21'), $('.st2-22'), $('.st2-27'), $('.st2-28')
	];

	var babina = [
		$('.st2-33'), $('.st2-34')
	];

	var life = [
		$('.st2-30'), $('.st2-31'), $('.st2-32'),
		$('.st2-36'), $('.st2-37'), $('.st2-38')
	];

	this.controller.addTween('body', 
		TweenMax.to([ $('.st2-4'), fruct[0], fruct[1], fruct[2], $('.st2-3'), $('.st2-5') ],.5,{
			top: 0
		}),
		0,
		1400);

	this.controller.addTween('body', 
		TweenMax.to([ fruct[3], fruct[4], fruct[5], micro[0], micro[1], $('.st2-11') ],.4,{
			top: 155
		}),
		0,
		1800);

	
	this.controller.addTween('body', 
		TweenMax.to( [ $('.st2-40'), $('.st2-39'), life[4], life[5], life[3], $('.st2-41'), $('.st5-1') ],.5,{
			top: 925
		}),
		0,
		2200);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st2-35'), babina[0], babina[1], life[0], life[1], life[2], $('.st2-30') ],.5,{
			top: 770
		}),
		0,
		3800);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st2-29'), $('.st2-26'), photo[2], photo[3], bike[2], bike[3] ],.5,{
			top: 615
		}),
		0,
		3000);	

	this.controller.addTween('body', 
		TweenMax.to([ fruct[6], fruct[7] ],.4,{
			top: 309
		}),
		0,
		3400);

	this.controller.addTween('body', 
		TweenMax.to([ micro[2], micro[3], $('.st2-14'), $('.st2-17') ],.4,{
			top: 310
		}),
		0,
		3400);


	this.controller.addTween('body', 
		TweenMax.to([ photo[0], bike[0], bike[1], $('.st2-20'), $('.st2-23') ],.4,{
			top: 465
		}),
		0,
		2600);

	this.controller.addTween('body', 
		TweenMax.to( photo[1], .4,{
			top: 462
		}),
		0,
		3800);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-43'),.5,{
			top: 924
		}),
		0,
		4200);

	this.controller.addTween('body', 
		TweenMax.to($('#almond .scrollBox'),.5,{
			top: 0
		}),
		4200,
		0);
=======
app.initAlmond = function(){

	app.elements.almond.hide();

	app.aElement = {
		micro : $('span[name="micro"]'),
		microText: $('.micro, .sMicro'),
		bike : $('span[name="bike"]'),
		bikeText : $('.bike, .sBike'),
		photo : $('span[name="photo"]'),
		photoText : $('.sPhoto, .photo'),
		life: $('span[name="oneLife"]'),
		lifeText : $('.sOneLife, .oneLife'),
		fru: $('span[name="fruc"]'),
		fruText : $('.sFruc, .fruc'),
		babina : $('span[name="babina"]'),
		babinaText : $('.babina, .sBabina'),
		buttleText : $('#almond .buttle, #almond .sButtle')
	}

	app.showAlmond();
	app.startAlmond();
	app.almondHover();
	app.micro();
	app.bike();
	app.photo();
	app.oneLife();
	app.fruc();
	app.babina();
	app.almondButtle();
	app.almondClick();
};
app.animateAlmond = function(){

	var s1 = app.elements.almond.find('.s1');
	s1.css({
		'position' : 'relative',
		'top' : '1300px'
	});

	app.elements.citrus.hide();
	app.elements.ginger.hide();
	app.elements.almond.show();
	app.elements.container.height(5500);

	app.aElement.microText.show().css('top', '-500px');
	app.aElement.bikeText.show().css('top', '-500px');
	app.aElement.photoText.show().css('top', '-500px');
	app.aElement.lifeText.show().css('top', '-500px');
	app.aElement.fruText.show().css('top', '-500px');
	app.aElement.babinaText.show().css('top', '-500px');
	app.aElement.buttleText.show().css('top', '-500px');

	$('html').getNiceScroll().resize();
	app.controller.removeTween('body');
	app.startAlmond();

	TweenMax.staggerTo(s1, 0.1,{
		'top' : 0
	}, 0.1);

}
app.showAlmond= function(){

	var yellow = $('.yellow');
	var yellowImg = yellow.find('img');

	yellowImg.on({
		click : function(e){
			e.preventDefault();
			var s1 = app.elements.almond.find('.s1');
			s1.css({
				'position' : 'relative',
				'top' : '1300px'
			});
			app.elements.citrus.hide();
			app.elements.ginger.hide();
			app.elements.almond.show();
			app.elements.container.height(5500);

			app.aElement.microText.show().css('top', '-500px');
			app.aElement.bikeText.show().css('top', '-500px');
			app.aElement.photoText.show().css('top', '-500px');
			app.aElement.lifeText.show().css('top', '-500px');
			app.aElement.fruText.show().css('top', '-500px');
			app.aElement.babinaText.show().css('top', '-500px');
			app.aElement.buttleText.show().css('top', '-500px');

			app.elements.htmlBody.animate({
				'scrollTop' : 925
			}, 300);


			$('html').getNiceScroll().resize();
			app.controller.removeTween('body');
			app.startAlmond();

			TweenMax.staggerTo(s1, 0.1,{
				'top' : 0
			}, 0.1);

		},
		mouseenter : function(){
			TweenMax.to(yellow, .3, {
				'marginTop' : '-140'
			});
		},
		mouseleave : function(){
			if( app.elements.almond.is( ':visible' ) ) return

			TweenMax.to(yellow, .3, {
				'marginTop' : '-100'
			});	
		}
	});

};

app.almondClick = function(){

	$('.logo-scroll').find('.box.y').on('click', function(){
		if( $(this).is( '.now' ) ) return;

		app.elements.htmlBody.animate({
			'scrollTop' : 940
		}, 600, function(){
			app.animateAlmond();
		});

	});

}
app.micro = function(){

	$('.sMicro').on('click', function(e){

		e.preventDefault();

		if(  $('.micro').is(':visible') ){
			$('.micro').hide();
		}
		else{
			$('.micro').show();
		}

	});

	$('span[name="micro"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1900
		}, 400)
	});
};

app.bike = function(){

	$('.sBike').on('click', function(e){

		e.preventDefault();

		if(  $('.bike').is( ':visible' ) ){
			$('.bike').hide();
		}
		else{
			$('.bike').show();
		}

	});

	$('span[name="bike"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2900
		}, 400)

	});

};

app.oneLife = function(){

	$('.sOneLife').on('click', function(e){

		e.preventDefault();

		if(  $('.oneLife').is(':visible') ){
			$('.oneLife').hide();
		}
		else{
			$('.oneLife').show();
		}

	});

	$('span[name="oneLife"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3900
		}, 400)
	});

};

// 4850
app.photo = function(){

	$('.sPhoto').on('click', function(e){

		e.preventDefault();

		if(  $('.photo').is(':visible') ){
			$('.photo').hide();
		}
		else{
			$('.photo').show();
		}

	});

	$('span[name="photo"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 3500
		}, 400)
	});

}

app.fruc = function(){

	$('.sFruc').on('click', function(e){

		e.preventDefault();

		if(  $('.fruc').is(':visible') ){
			$('.fruc').hide();
		}

		else{
			$('.photo').show();
		}

	});

	$('span[name="fruc"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 1500
		}, 400)

	});
}
// 5300
app.babina = function(){

	$('.sBabina').on('click', function(e){

		e.preventDefault();

		if(  $('.babina').is(':visible') ){
			$('.babina').hide();
		}
		else{
			$('.babina').show();
		}

	});

	$('span[name="babina"]').on('click', function(){
		app.elements.htmlBody.animate({
			'scrollTop' : 2600
		}, 400)
	});
};

app.almondButtle = function(){

	$('#almond .sButtle').on('click', function(e){

		e.preventDefault();

		if(  $('#almond .buttle').is(':visible') ){
			$('#almond .buttle').hide();
		}
		else{
			$('#almond .buttle').show();
		}

	});

}
app.almondHover = function(){

	app.aElement.bike.hover(function(){

		app.aElement.bike.parent().addClass('hover');

	}, function(){
		if( !app.aElement.bike.parent().is('.static') )
			app.aElement.bike.parent().removeClass('hover');

	});

	// micro
	app.aElement.micro.hover(function(){
		app.aElement.micro.addClass('hover');

	}, function(){
		if( !app.aElement.micro.is('.static') )
			app.aElement.micro.removeClass('hover');

	});

	// photo
	app.aElement.photo.hover(function(){
		app.aElement.photo.addClass('hover');

	}, function(){
		if( !app.aElement.photo.is('.static') )
			app.aElement.photo.removeClass('hover');
	});

	// life
	app.aElement.life.hover(function(){
		app.aElement.life.addClass('hover');

	}, function(){
		if( !app.aElement.life.is('.static') )
			app.aElement.life.removeClass('hover');
	});

	// babina
	app.aElement.babina.hover(function(){
		app.aElement.babina.addClass('hover');

	}, function(){
		if( !app.aElement.babina.is('.static') )
			app.aElement.babina.removeClass('hover');
	});
	// fruc
	app.aElement.fru.hover(function(){
		app.aElement.fru.addClass('hover');

	}, function(){
		if( !app.aElement.fru.is('.static') )
			app.aElement.fru.removeClass('hover');
	});	
	
}

app.scrollAlmond = function(scroll){
	
	if( !app.elements.almond.is(':visible') && !TweenMax.isTweening( app.elements.body )) return;

	// fruct
	if( scroll >= 1400 && scroll < 1600 
		&& app.aElement.fruText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.fruText ) ){
		console.log( 'fruc' )
		TweenMax.to(app.aElement.fruText, .4, {
			top: 117
		});
		app.aElement.fru.addClass('hover static');
	} 
	else if( ( scroll >= 1700 || scroll <= 1300 )
			&& app.aElement.fruText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.fruText )){
		TweenMax.to(app.aElement.fruText, .4, {
			top: -500
		});
		app.aElement.fru.removeClass('hover static');
	}
	// micro
	if( scroll > 1800 && scroll <= 2200  
		&& app.aElement.microText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.microText ) ){
		console.log( 'micro' )
		TweenMax.to(app.aElement.microText, .4, {
			top: 117
		});
		app.aElement.micro.addClass('hover static');
	} 
	else if( ( scroll >= 2300 || scroll < 1800 ) 
			&& app.aElement.microText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.microText )){
		TweenMax.to(app.aElement.microText, .4, {
			top: -500
		});
		app.aElement.micro.removeClass('hover static');
	}

	// photo

	if( scroll > 3400 && scroll < 3600  
		&& app.aElement.photoText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.photoText ) ){
		console.log( 'photo' )
		TweenMax.to(app.aElement.photoText, .4, {
			top: 117
		});
		app.aElement.photo.addClass('hover static');
	} 
	else if( ( scroll >= 3700 || scroll <= 3300 )
			&& app.aElement.photoText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.photoText )){
		TweenMax.to(app.aElement.photoText, .4, {
			top: -500
		});
		app.aElement.photo.removeClass('hover static');
	}

	// bike
	if( scroll > 2800 && scroll <= 3200 
		&& app.aElement.bikeText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.bikeText ) ){
		console.log( 'bike' )
		TweenMax.to(app.aElement.bikeText, .4, {
			top: 117
		});
		app.aElement.bike.parent().addClass('hover static');
	} 
	else if( ( scroll >= 3300 || scroll <= 2700 ) 
			&& app.aElement.bikeText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.bikeText )){
		TweenMax.to(app.aElement.bikeText, .4, {
			top: -500
		});
		app.aElement.bike.parent().removeClass('hover static');
	}

	//babina
		if( scroll > 2400 && scroll < 2700 
		&& app.aElement.babinaText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.babinaText ) ){
		console.log( 'bike' )
		TweenMax.to(app.aElement.babinaText, .4, {
			top: 117
		});
		app.aElement.babina.addClass('hover static');
	} 
	else if( ( scroll >= 2800 || scroll <= 2300 ) 
			&& app.aElement.babinaText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.babinaText )){
		TweenMax.to(app.aElement.babinaText, .4, {
			top: -500
		});
		app.aElement.babina.removeClass('hover static');
	}
	// life
	if( scroll > 3800 && scroll < 4100 
		&& app.aElement.lifeText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.lifeText ) ){
		console.log( 'life' )
		TweenMax.to(app.aElement.lifeText, .4, {
			top: 117
		});
		app.aElement.life.addClass('hover static');
	} 
	else if( ( scroll >= 4200 || scroll <= 3700 ) 
			&& app.aElement.lifeText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.bikeText )){
		TweenMax.to(app.aElement.lifeText, .4, {
			top: -500
		});
		app.aElement.life.removeClass('hover static');
	}
	// buttle
	if( scroll > 4400 && scroll < 4800 
		&& app.aElement.buttleText.css('top') != '117px' 
		&& !TweenMax.isTweening( app.aElement.buttleText ) ){
		console.log( 'butle' )
		TweenMax.to(app.aElement.buttleText, .4, {
			top: 117
		});	
	} 
	else if( ( scroll <= 4100 ) 
			&& app.aElement.buttleText.css('top') != '-500px' 
			&& !TweenMax.isTweening( app.aElement.buttleText )){
		TweenMax.to(app.aElement.buttleText, .4, {
			top: -500
		});
	}
}
app.startAlmond = function(){
	if( !app.elements.almond.is( ':visible' ) ) return

	var fruct = [
		$('.st2-0'), $('.st2-1'), $('.st2-2'),
		$('.st2-6'), $('.st2-7'), $('.st2-8'),
		$('.st2-12'), $('.st2-13')
	];

	var micro = [
		$('.st2-9'), $('.st2-10'), $('.st2-15'),
		$('.st2-16')
	];

	var photo = [
		$('.st2-18'),
		$('.st2-19'), $('.st2-24'), $('.st2-25')
	];

	var bike = [
		$('.st2-21'), $('.st2-22'), $('.st2-27'), $('.st2-28')
	];

	var babina = [
		$('.st2-33'), $('.st2-34')
	];

	var life = [
		$('.st2-30'), $('.st2-31'), $('.st2-32'),
		$('.st2-36'), $('.st2-37'), $('.st2-38')
	];

	this.controller.addTween('body', 
		TweenMax.to([ $('.st2-4'), fruct[0], fruct[1], fruct[2], $('.st2-3'), $('.st2-5') ],.5,{
			top: 0
		}),
		0,
		1400);

	this.controller.addTween('body', 
		TweenMax.to([ fruct[3], fruct[4], fruct[5], micro[0], micro[1], $('.st2-11') ],.4,{
			top: 155
		}),
		0,
		1800);

	
	this.controller.addTween('body', 
		TweenMax.to( [ $('.st2-40'), $('.st2-39'), life[4], life[5], life[3], $('.st2-41'), $('.st5-1') ],.5,{
			top: 925
		}),
		0,
		2200);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st2-35'), babina[0], babina[1], life[0], life[1], life[2], $('.st2-30') ],.5,{
			top: 770
		}),
		0,
		3800);

	this.controller.addTween('body', 
		TweenMax.to( [ $('.st2-29'), $('.st2-26'), photo[2], photo[3], bike[2], bike[3] ],.5,{
			top: 615
		}),
		0,
		3000);	

	this.controller.addTween('body', 
		TweenMax.to([ fruct[6], fruct[7] ],.4,{
			top: 309
		}),
		0,
		3400);

	this.controller.addTween('body', 
		TweenMax.to([ micro[2], micro[3], $('.st2-14'), $('.st2-17') ],.4,{
			top: 310
		}),
		0,
		3400);


	this.controller.addTween('body', 
		TweenMax.to([ photo[0], bike[0], bike[1], $('.st2-20'), $('.st2-23') ],.4,{
			top: 465
		}),
		0,
		2600);

	this.controller.addTween('body', 
		TweenMax.to( photo[1], .4,{
			top: 462
		}),
		0,
		3800);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-43'),.5,{
			top: 924
		}),
		0,
		4200);

	this.controller.addTween('body', 
		TweenMax.to($('#almond .scrollBox'),.5,{
			top: 0
		}),
		4200,
		0);
>>>>>>> b0a3f17aa6e0e7831a0c1e96900d89995ebafe2d
}