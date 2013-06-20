app.initOrange = function(){

	app.elements.citrus.hide();

	app.oElement = {
		city : $('span[name="city"]'),
		cityText: $('.city, .sCity'),
		bridge : $('span[name="bridge"]'),
		bridgeText : $('.bridge, .sBridge'),
		plane : $('span[name="plane"]'),
		planeText : $('.s2-7, .plane'),
		fruc: $('span[name="fruit"]'),
		frucText : $('.s2-6, .fruit'),
		scuter: $('span[name="moto"]'),
		scuterText : $('.sScoter, .scoter'),
		life : $('span[name="life"]'),
		lifeText : $('.sLife, .life'),
		buttleText : $('#orange .buttle, #orange .sButtle'),
		scrollBox : $('#orange .scrollBox'),
		buttle : $('span[name="buttleOrange"]')
	}

	app.orangeHover();
	app.showOrange();
	app.fruit();
	app.plane();
	app.city();
	app.scoter();
	app.life();
	app.bridge();
	app.orangeButtle();
	app.orangeClick();

	app.scrollO = {
		bridge : [
			document.getElementById('ste1-0'),
			document.getElementById('ste1-1'),
			document.getElementById('ste1-6'),
			document.getElementById('ste1-7')

		],
		city : [
			document.getElementById('ste1-2'),
			document.getElementById('ste1-3'),
			document.getElementById('ste1-4'),
			document.getElementById('ste1-8'),
			document.getElementById('ste1-9'),
			document.getElementById('ste1-10'),
			document.getElementById('ste1-15'),
			document.getElementById('ste1-16')
		],
		plane : [
			document.getElementById('ste1-12'),
			document.getElementById('ste1-13'),
			document.getElementById('ste1-19'),
			document.getElementById('ste1-18'),
		],
		fruct : [
			document.getElementById('ste1-24'),
			document.getElementById('ste1-25')
		],
		scuter : [
			document.getElementById('ste1-21'),
			document.getElementById('ste1-22'),
			document.getElementById('ste1-27'),
			document.getElementById('ste1-28')
		],
		other_5  : document.getElementById('ste1-5'),
		other_11 : document.getElementById('ste1-11'),
		other_13 : document.getElementById('ste1-13'),
		other_14 : document.getElementById('ste1-14'),
		other_16 : document.getElementById('ste1-16'),
		other_17 : document.getElementById('ste1-17'),
		other_20 : document.getElementById('ste1-20'),
		other_22 : document.getElementById('ste1-22'),
		other_23 : document.getElementById('ste1-23'),
		other_26 : document.getElementById('ste1-26'),
		other_29 : document.getElementById('ste1-29'),
		other_30 : document.getElementById('ste1-30'),
		other_31 : document.getElementById('ste1-31'),
		other_32 : document.getElementById('ste1-32'),
		other_33 : document.getElementById('ste1-33'),
		other_34 : document.getElementById('ste1-34'),
		other_35 : document.getElementById('ste1-35'),
		other_36 : document.getElementById('ste1-36'),
		other_37 : document.getElementById('ste1-37'),
		other_38 : document.getElementById('ste1-38'),
		other_39 : document.getElementById('ste1-39'),
		other_40 : document.getElementById('ste1-40'),
		other_41 : document.getElementById('ste1-41'),
		other_43 : document.getElementById('ste1-43')
	}
};

app.animateOrange = function(){

	var s1 = app.elements.citrus.find('.animate');
		s1.css('top','1300px');

	app.elements.ginger.hide();
	app.elements.almond.hide();
	app.elements.citrus.show();

	app.oElement.cityText.show().css('top', '-500px');
	app.oElement.bridgeText.show().css('top', '-500px');
	app.oElement.planeText.show().css('top', '-500px');
	app.oElement.frucText.show().css('top', '-500px');
	app.oElement.scuterText.show().css('top', '-500px');
	app.oElement.lifeText.show().css('top', '-500px');
	app.oElement.buttleText.show().css('top', '-500px');

	$('html').getNiceScroll().resize();

	TweenMax.to(s1, 0,{scale : 0});
	TweenMax.staggerTo(s1, .1,{
		'top' : 0,
		scale : 1,
		onComplete : function(){
			app.startOrange();
		}
	}, .1);

	// 0
	TweenMax.to( [ 
		app.scrollO.bridge[0], 
		app.scrollO.bridge[1], 
		app.scrollO.city[0],
		app.scrollO.city[1], 
		app.scrollO.city[2],
		app.scrollO.other_5 ],0, {
			scale : 0,
			top: -500
	})
	// 155
	TweenMax.to( [ 
		app.scrollO.bridge[2], 
		app.scrollO.bridge[3], 
		app.scrollO.city[3],
		app.scrollO.city[4], 
		app.scrollO.city[5],
		app.scrollO.other_11 ],0, {
		scale : 0,
		top: -500
	});
	// 310
	TweenMax.to( [ 
		app.scrollO.city[6], 
		app.scrollO.city[7], 
		app.scrollO.other_14,
		app.scrollO.other_17, 
		app.scrollO.other_16,
		app.scrollO.plane[0], 
		app.scrollO.plane[1], 
		app.scrollO.other_13 ], 0, {
			scale : 0,
			top: -500
	});
	//  465
	TweenMax.to( [ 
		app.scrollO.plane[3],
		app.scrollO.scuter[0], 
		app.scrollO.scuter[1], 
		app.scrollO.other_22, 
		app.scrollO.other_23,
		app.scrollO.plane[2]
	],0,{
		scale : 0,
		top: -500
	})
	// 615
	TweenMax.to( [ 
		app.scrollO.other_29, 
		app.scrollO.other_26, 
		app.scrollO.fruct[0], 
		app.scrollO.fruct[1],
		app.scrollO.scuter[2], 
		app.scrollO.scuter[3] ],0,{
			scale : 0,
			top: -500
	})
	//  770
	TweenMax.to( [ 
		app.scrollO.other_35,  
		app.scrollO.other_32, 
	 	app.scrollO.other_31,  
	 	app.scrollO.other_33, 
	 	app.scrollO.other_30,  
	 	app.scrollO.other_34 ],0,{
			scale : 0,
			top: -500
	})
	//  925 
	TweenMax.to( [ 
		app.scrollO.other_36, 
		app.scrollO.other_40,
		app.scrollO.other_36, 
	 	app.scrollO.other_40,
	 	app.scrollO.other_39, 
	 	app.scrollO.other_37, 
	 	app.scrollO.other_38, 
	 	app.scrollO.other_41,
	 	app.scrollO.other_43 ],0,{
		scale : 0,
		top: -500
	})
}

app.showOrange = function(){
	
	var orange = $('.orange');
	var orangeImg = orange.find('img');
	var $window = $(window);

	orangeImg.on({
		click : function(e){
			e.preventDefault();

			app.elements.htmlBody.animate({
				'scrollTop' : 925
			}, 300);
			app.animateOrange();

		},
		mouseenter : function(){
			TweenMax.to(orange, .3, {
				'marginTop' : '-50'
			});
		},
		mouseleave : function(){
			if( app.elements.citrus.is( ':visible' ) ) return

			TweenMax.to(orange, .3, {
				marginTop : 0
			});	
		}
	});

};
app.orangeClick = function(){

	$('.logo-scroll').find('.box.o').on('click', function(){
		if( $(this).is( '.now' ) ) return;

		app.elements.htmlBody.animate({
			'scrollTop' : 940
		}, 600, function(){
			app.animateOrange();
		});
	});

}

app.fruit = function(){

	$('.s2-6').on('click', function(e){
		e.preventDefault()
		
		if( $('.fruit').is(':visible') ){
			$('.fruit').hide();
			app.oElement.fruc.removeClass('hover static');
		}
		else{
			$('.fruit').show();
			app.oElement.fruc.addClass('hover static');
		}
			
	});

	
	app.oElement.fruc.on('click', function(){

		TweenMax.to(app.scrollO.other_17, .5,{
			top: 1300
		});

		app.oElement.frucText.show();

		TweenMax.to(app.oElement.frucText, .5,{ top: 427 });
		TweenMax.to(app.oElement.planeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.bridgeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.lifeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.scuterText, .5,{ top: -500 });
		TweenMax.to(app.oElement.buttleText, .5,{ top: -500 });
		TweenMax.to(app.oElement.cityText, .5,{ top: -500 });

		app.oElement.fruc.addClass('hover static');
		app.oElement.plane.removeClass('hover static');
		app.oElement.city.removeClass('hover static');
		app.oElement.bridge.removeClass('hover static');
		app.oElement.life.removeClass('hover static');
		app.oElement.scuter.removeClass('hover static');

	});
}

app.plane = function(){

	$('.s2-7').on('click', function(e){
		e.preventDefault();

		if( $('.plane').is(':visible') ){
			$('.plane').hide();
			app.oElement.plane.removeClass('hover static');
		}
		else{
			app.oElement.plane.addClass('hover static');
			$('.plane').show();
		}
			

	});

	app.oElement.plane.on('click', function(){
		
		app.oElement.planeText.show();

		TweenMax.to(app.scrollO.other_17, .5,{
			top: 1300
		});

		TweenMax.to(app.oElement.frucText, .5,{top: -500 });
		TweenMax.to(app.oElement.cityText, .5,{ top: -500 });
		TweenMax.to(app.oElement.bridgeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.lifeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.scuterText, .5,{ top: -500 });
		TweenMax.to(app.oElement.buttleText, .5,{ top: -500 });
		TweenMax.to(app.oElement.planeText, .5,{ top: 427 });

		app.oElement.fruc.removeClass('hover static');
		app.oElement.plane.addClass('hover static');
		app.oElement.city.removeClass('hover static');
		app.oElement.bridge.removeClass('hover static');
		app.oElement.scuter.removeClass('hover static');
		app.oElement.life.removeClass('hover static');
	});

};

app.city = function(){


	$('.sCity').on('click', function(e){
		e.preventDefault();

		if( $('.city').is(':visible') ){
			$('.city').hide();
			app.oElement.city.removeClass('hover static');
		}
		else{
			$('.city').show();
			app.oElement.city.addClass('hover static');
		}
			
	});

	app.oElement.city.on('click', function(){
		TweenMax.to(app.scrollO.other_17, .5,{
			top: 1300
		});

		app.oElement.cityText.show();

		TweenMax.to(app.oElement.frucText, .5,{top: -500 });
		TweenMax.to(app.oElement.planeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.bridgeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.lifeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.scuterText, .5,{ top: -500 });
		TweenMax.to(app.oElement.buttleText, .5,{ top: -500 });
		TweenMax.to(app.oElement.cityText, .5,{ top: 427 });

		app.oElement.city.addClass('hover static');
		app.oElement.fruc.removeClass('hover static');
		app.oElement.plane.removeClass('hover static');
		app.oElement.bridge.removeClass('hover static');
		app.oElement.scuter.removeClass('hover static');
		app.oElement.life.removeClass('hover static');

	});

};
app.bridge = function(){


	$('.sBridge').on('click', function(e){
		e.preventDefault();

		if( $('.bridge').is(':visible') ){
			$('.bridge').hide();
			app.oElement.bridge.removeClass('hover static');
		}		
		else{
			$('.bridge').show();
			app.oElement.bridge.addClass('hover static');
		}
			
	});


	app.oElement.bridge.on('click', function(){

		TweenMax.to(app.scrollO.other_17, .5,{
			top: 1300
		});

		app.oElement.buttleText.show();

		TweenMax.to(app.oElement.frucText, .5,{top: -500 });
		TweenMax.to(app.oElement.planeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.cityText, .5,{ top: -500 });
		TweenMax.to(app.oElement.lifeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.scuterText, .5,{ top: -500 });
		TweenMax.to(app.oElement.buttleText, .5,{ top: -500 });
		TweenMax.to(app.oElement.bridgeText, .5,{ top: 427 });

		app.oElement.bridge.addClass('hover static');
		app.oElement.city.removeClass('hover static');
		app.oElement.fruc.removeClass('hover static');
		app.oElement.plane.removeClass('hover static');
		app.oElement.scuter.removeClass('hover static');
		app.oElement.life.removeClass('hover static');

	});

};

app.life = function(){

	$('.sLife').on('click', function(e){
		e.preventDefault();

		if( $('.life').is(':visible') ){
			$('.life').hide();
			app.oElement.life.removeClass('hover static');
		}
		else{
			$('.life').show();
			app.oElement.life.addClass('hover static');
		}
			
	});


	app.oElement.life.on('click', function(){

		TweenMax.to(app.scrollO.other_17, .5,{
			top: 1300
		});	

		app.oElement.lifeText.show();

		TweenMax.to(app.oElement.frucText, .5,{top: -500 });
		TweenMax.to(app.oElement.planeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.cityText, .5,{ top: -500 });
		TweenMax.to(app.oElement.bridgeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.scuterText, .5,{ top: -500 });
		TweenMax.to(app.oElement.buttleText, .5,{ top: -500 });
		TweenMax.to(app.oElement.lifeText, .5,{ top: 427 });


		app.oElement.bridge.removeClass('hover static');
		app.oElement.city.removeClass('hover static');
		app.oElement.fruc.removeClass('hover static');
		app.oElement.plane.removeClass('hover static');
		app.oElement.scuter.removeClass('hover static');
		app.oElement.life.addClass('hover static');
	});

};

app.scoter = function(){
	
	$('.sScoter').on('click', function(e){
		e.preventDefault();

		if( $('.scoter').is(':visible') ){
			$('.scoter').hide();
			app.oElement.scuter.removeClass('hover static');
		}		
		else{
			$('.scoter').show();
			app.oElement.scuter.addClass('hover static');
		}
			
	});

	app.oElement.scuter.on('click', function(){

		TweenMax.to(app.scrollO.other_17, .5,{
			top: 1300
		});

		app.oElement.scuterText.show();

		TweenMax.to(app.oElement.frucText, .5,{top: -500 });
		TweenMax.to(app.oElement.planeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.cityText, .5,{ top: -500 });
		TweenMax.to(app.oElement.bridgeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.lifeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.buttleText, .5,{ top: -500 });
		TweenMax.to(app.oElement.scuterText, .5,{ top: 427 });


		app.oElement.bridge.removeClass('hover static');
		app.oElement.city.removeClass('hover static');
		app.oElement.fruc.removeClass('hover static');
		app.oElement.plane.removeClass('hover static');
		app.oElement.life.removeClass('hover static');
		app.oElement.scuter.addClass('hover static');

	});
}

app.orangeButtle = function(){
	
	$('#orange .sButtle').on('click', function(e){
		e.preventDefault();

		if( $('#orange .buttle').is(':visible') ){
			$('#orange .buttle').hide();
		}		
		else{
			$('#orange .buttle').show();
		}
	});
	
	app.oElement.buttle.on('click', function(){

		TweenMax.to(app.scrollO.other_17, .5,{
			top: 1300
		});	

		app.oElement.buttleText.show();

		TweenMax.to(app.oElement.frucText, .5,{top: -500 });
		TweenMax.to(app.oElement.planeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.cityText, .5,{ top: -500 });
		TweenMax.to(app.oElement.bridgeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.lifeText, .5,{ top: -500 });
		TweenMax.to(app.oElement.scuterText, .5,{ top: -500 });
		TweenMax.to(app.oElement.buttleText, .5,{ top: 427 });

	});

}
app.orangeHover = function(){

	//plane
	app.oElement.plane.hover(function(){

		app.oElement.plane.addClass('hover');

	}, function(){
		if( !app.oElement.plane.is('.static') )
			app.oElement.plane.removeClass('hover');

	});

	// city
	app.oElement.city.hover(function(){
		app.oElement.city.addClass('hover');

	}, function(){
		if( !app.oElement.city.is('.static') )
			app.oElement.city.removeClass('hover');

	});

	// fruit
	app.oElement.fruc.hover(function(){
		app.oElement.fruc.addClass('hover');

	}, function(){
		if( !app.oElement.fruc.is('.static') )
			app.oElement.fruc.removeClass('hover');
	});

	// life
	app.oElement.life.hover(function(){
		app.oElement.life.addClass('hover');

	}, function(){
		if( !app.oElement.life.is('.static') )
			app.oElement.life.removeClass('hover');
	});

	// scuter
	app.oElement.scuter.hover(function(){
		app.oElement.scuter.addClass('hover');

	}, function(){
		if( !app.oElement.scuter.is('.static') )
			app.oElement.scuter.removeClass('hover');
	});

	// bridge
	app.oElement.bridge.hover(function(){
		app.oElement.bridge.addClass('hover');

	}, function(){
		if( !app.oElement.bridge.is('.static') )
			app.oElement.bridge.removeClass('hover');
	});


}

app.startOrange = function(){

	if( !app.elements.citrus.is( ':visible' ) ) return

	$(window).on('scroll', function(){

		if( app.elements.citrus.is( ':visible' ) && $(this).scrollTop() === 0 ){

			TweenMax.to($('.orange'), .3, {
				'marginTop' : '0'
			});
			app.elements.citrus.hide();
			app.oElement.scrollBox.css('top', '307px');
			app.oElement.bridge.removeClass('hover static');
			app.oElement.city.removeClass('hover static');
			app.oElement.fruc.removeClass('hover static');
			app.oElement.plane.removeClass('hover static');
			app.oElement.life.removeClass('hover static');
			app.oElement.scuter.removeClass('hover static');
			$(this).off();
		}
	});

	// 0
	TweenMax.staggerTo( [ 
		app.scrollO.bridge[0], 
		app.scrollO.bridge[1], 
		app.scrollO.city[0],
		app.scrollO.city[1], 
		app.scrollO.city[2],
		app.scrollO.other_5 ], .8, {
			top : 0,
			scale : 1,
			ease:Sine.easeIn
	}, .3)

	// 155
	TweenMax.staggerTo( [ 
		app.scrollO.bridge[2], 
		app.scrollO.bridge[3], 
		app.scrollO.city[3],
		app.scrollO.city[4], 
		app.scrollO.city[5],
		app.scrollO.other_11 ], .8, {
		top : 155,
		scale : 1,
		ease:Sine.easeIn
	}, .3);
	// 310
	TweenMax.staggerTo( [ 
		app.scrollO.city[6], 
		app.scrollO.city[7], 
		app.scrollO.other_14,
		app.scrollO.other_17, 
		app.scrollO.other_16,
		app.scrollO.plane[0], 
		app.scrollO.plane[1], 
		app.scrollO.other_13 ], .8, {
			top : 310,
			scale : 1,
			ease:Sine.easeIn
	}, .3);

	//  465
	TweenMax.staggerTo( [ 
		app.scrollO.plane[3],
		app.scrollO.scuter[0], 
		app.scrollO.scuter[1], 
		app.scrollO.other_22, 
		app.scrollO.other_23,
		app.scrollO.plane[2]
	],.8,{
		top: 465,
		scale : 1,
		ease:Sine.easeIn
	}, .3)


	// 615
	TweenMax.staggerTo( [ 
		app.scrollO.other_29, 
		app.scrollO.other_26, 
		app.scrollO.fruct[0], 
		app.scrollO.fruct[1],
		app.scrollO.scuter[2], 
		app.scrollO.scuter[3] ],.8,{
			top: 615,
			scale : 1,
			ease:Sine.easeIn
	}, .3)

	// 770
	TweenMax.staggerTo( [ 
		app.scrollO.other_35,  
		app.scrollO.other_32, 
	 	app.scrollO.other_31,  
	 	app.scrollO.other_33, 
	 	app.scrollO.other_30,  
	 	app.scrollO.other_34 ],.8,{
			top: 770,
			scale : 1,
			ease:Sine.easeIn
	}, .3)

	// 925
	TweenMax.staggerTo( [
	 	app.scrollO.other_36, 
	 	app.scrollO.other_40,
	 	app.scrollO.other_39, 
	 	app.scrollO.other_37, 
	 	app.scrollO.other_38, 
	 	app.scrollO.other_41 ],.8,{
		scale : 1,
		top : 925,
		ease:Sine.easeIn
	}, .3);


	TweenMax.to(app.scrollO.other_43,.8,{
		top: 924,
		scale : 1,
		ease:Sine.easeIn
	})

	TweenMax.to(app.oElement.scrollBox, 2,{
		top: 0
	});

	// app.elements.htmlBody.animate({'scrollTop' : $(document).height() })
}