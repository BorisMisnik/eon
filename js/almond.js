app.initAlmond = function(){

	$('#almond').hide();

	$('.yellow img').on({
		mouseenter : function(){
			app.almondImageHover();
		}
	});

	app.bikeElement = $('.sBike, .bike');
	app.photoElement = $('.sPhoto, .photo');
	app.oneLifeElement = $('.sOneLife, .oneLife');
	app.frucElement = $('.sFruc, .fruc');
	app.babinaElement = $('.sBabina, .babina');
	app.microElement = $('.sMicro, .micro');

	app.showAlmond();
	app.startAlmond();
	app.micro();
	app.bike();
	app.photo();
	app.oneLife();
	app.fruc();
	app.babina();

};

app.showAlmond= function(){

	var almond = $('.logo-scroll').find('.box.y');

	almond.on({
		click : function(e){
			e.preventDefault();

			if( $(this).is('.now') ) return;

			var second = $('body').scrollTop() === 0 ? 0 : 3;
			var s1 = $('#almond .s1');
			s1.css({
				'position' : 'relative',
				'top' : '1300px'
			});

			app.bikeElement.hide().css('top', '1300px');
			app.photoElement.hide().css('top', '1300px');
			app.oneLifeElement.hide().css('top', '1300px');
			app.frucElement.hide().css('top', '1300px');
			app.babinaElement.hide().css('top', '1300px');
			app.microElement.hide().css('top', '1300px');

			TweenMax.to($('body'), second, {
				scrollTop: 0,
				onComplete: show
			});


			function show(){
				// $('html, body').scrollTop(0);
				$('#ginger').hide();
				$('#orange').hide();
				$('#almond').show();

				$('#container').height(7500);
				TweenMax.staggerTo(s1, 0.1,{
					'top' : 0
				}, 0.1);
				
				// app.controller.triggerCheckAnim(true);
				// $('.st2-30').css('top', '1300px');
			}
		}
	});

};

app.almondImageHover = function(){

	$('#main').fadeOut(function(){

		

		var s1 = $('#almond .s1');
		s1.css({
			'position' : 'relative',
			'top' : '1300px'
		});

		app.bikeElement.hide().css('top', '1300px');
		app.photoElement.hide().css('top', '1300px');
		app.oneLifeElement.hide().css('top', '1300px');
		app.frucElement.hide().css('top', '1300px');
		app.babinaElement.hide().css('top', '1300px');
		app.microElement.hide().css('top', '1300px');

		$('#orange').hide();
		$('#ginger').hide();
		$('#almond').fadeIn(function(){
			// $('html, body').scrollTop(0);
			$('#container').height(7600);
				TweenMax.staggerTo(s1, 0.1,{
						'top' : 0
				}, 0.1);
			});
			// app.initScroll();
	});
};

app.micro = function(){
	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sMicro, .micro'), .5, {
				top: '465px',
				onStart: function(){
					$('.sMicro, .micro').show()
				}
			}),
			0,
			3000);
	}

	function hide(){
		app.controller.addTween('body', 
			TweenMax.to($('.sMicro, .micro'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sMicro, .micro').css('top', '1300px')
				}
			}),
			0,
			3600);

	}
	
	show();
	hide();


	$('.sMicro').on('click', function(e){

		e.preventDefault();

		if(  $('.micro').css('display') === 'block' ||   $('.micro').css('display') === 'inline' ){
			$('.micro').hide();
		}
		else{
			$('.micro').show();
		}

	});

	$('span[name="micro"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 3000,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sBike, .bike').hide();
		$('.sPhoto, .photo').hide();
		$('.sOneLife, .oneLife').hide();
		$('.sFruc, .fruc').hide();
		$('.sBabina, .babina').hide();
		$('.sMicro, .micro').show();

	});
};

app.bike = function(){


	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sBike, .bike'), .5, {
				top: '465px',
				onStart: function(){
					$('.sBike, .bike').show()
				}
			}),
			0,
			3600);
	}
	function hide(){
		app.controller.addTween('body', 
			TweenMax.to($('.sBike, .bike'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sBike, .bike').css('top', '1300px')
				}
			}),
			0,
			4050);
	}
	show();
	hide();

	$('.sBike').on('click', function(e){

		e.preventDefault();

		if(  $('.bike').css('display') === 'block' ||   $('.bike').css('display') === 'inline' ){
			$('.bike').hide();
		}
		else{
			$('.bike').show();
		}

	});

	$('span[name="bike"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 3450,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sMicro, .micro').hide();
		$('.sPhoto, .photo').hide();
		$('.sFruc, .fruc').hide();
		$('.sOneLife, .oneLife').hide();
		$('.sBabina, .babina').hide();
		$('.sBike, .bike').show();

	});

};

app.oneLife = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sOneLife, .oneLife'), .5, {
				top: '445px',
				onStart: function(){
					$('.sOneLife, .oneLife').show()
				}
			}),
			0,
			4850);
	}


	function hide(){
		app.controller.addTween('body', 
			TweenMax.to($('.sOneLife, .oneLife'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sOneLife, .oneLife').css('top', '1300px')
				}
			}),
			0,
			5600);
	}

	show();
	hide();


	$('.sOneLife').on('click', function(e){

		e.preventDefault();

		if(  $('.oneLife').css('display') === 'block' ||   $('.oneLife').css('display') === 'inline' ){
			$('.oneLife').hide();
		}
		else{
			$('.oneLife').show();
		}

	});

	$('span[name="oneLife"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 4850,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sBike, .bike').hide();
		$('.sMicro, .micro').hide();
		$('.sPhoto, .photo').hide();
		$('.sFruc, .fruc').hide();
		$('.sBabina, .babina').hide();
		$('.sOneLife, .oneLife').show();

	});

};

// 4850
app.photo = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sPhoto, .photo'), .5, {
				top: '133px',
				onStart: function(){
					$('.sPhoto, .photo').show()
				}
			}),
			0,
			3900);	
	}

	function hide(){
		app.controller.addTween('body', 
			TweenMax.to($('.sPhoto, .photo'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sPhoto, .photo').css('top', '1300px')
				}
			}),
			0,
			4500);
	}

	show();
	hide();

	$('.sPhoto').on('click', function(e){

		e.preventDefault();

		if(  $('.photo').css('display') === 'block' ||   $('.photo').css('display') === 'inline' ){
			$('.photo').hide();
		}
		else{
			$('.photo').show();
		}

	});

	$('span[name="photo"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 3900,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sBike, .bike').hide();
		$('.sMicro, .micro').hide();
		$('.sMicro, .onLife').hide();
		$('.sFruc, .fruc').hide();
		$('.sBabina, .babina').hide();
		$('.sPhoto, .photo').show();
	});

}

app.fruc = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sFruc, .fruc'), .5, {
				top: '445px',
				onStart: function(){
					$('.sFruc, .fruc').show()
				}
			}),
			0,
			5600);	
	}

	function hide(){
		app.controller.addTween('body', 
			TweenMax.to($('.sFruc, .fruc'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sFruc, .fruc').css('top', '1300px')
				}
			}),
			0,
			6050);
	}

	show();
	hide();

	$('.sFruc').on('click', function(e){

		e.preventDefault();

		if(  $('.fruc').css('display') === 'block' ||   $('.fruc').css('display') === 'inline' ){
			$('.fruc').hide();
		}
		else{
			$('.photo').show();
		}

	});

	$('span[name="fruc"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 5300,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sBike, .bike').hide();
		$('.sMicro, .micro').hide();
		$('.sMicro, .oneLife').hide();
		$('.sMicro, .oneLife').hide();
		$('.sPhoto, .photo').hide();
		$('.sBabina, .babina').hide();
		$('.sFruc, .fruc').show();

	});
}
// 5300
app.babina = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sBabina, .babina'), .5, {
				top: '445px',
				onStart: function(){
					$('.sBabina, .babina').show()
				}
			}),
			0,
			6100);	
	}

	function hide(){
		app.controller.addTween('body', 
			TweenMax.to($('.sBabina, .babina'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sBabina, .babina').css('top', '1300px')
				}
			}),
			0,
			6450);
	}

	show();
	hide();

	$('.sBabina').on('click', function(e){

		e.preventDefault();

		if(  $('.babina').css('display') === 'block' ||   $('.babina').css('display') === 'inline' ){
			$('.babina').hide();
		}
		else{
			$('.babina').show();
		}

	});

	$('span[name="babina"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 5750,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim({
		// 	immediately: true
		// });
		// show();
		// hide();

		$('.sBike, .bike').hide();
		$('.sMicro, .micro').hide();
		$('.sMicro, .oneLife').hide();
		$('.sMicro, .oneLife').hide();
		$('.sPhoto, .photo').hide();
		$('.sFruc, .fruc').hide();
		$('.sBabina, .babina').show();

	});
}

// 5600
app.startAlmond = function(){
	this.controller.addTween('body', 
		TweenMax.to($('.st2-0'),.5,{
			top: 0
		}),
		0,
		450);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-19'),.5,{
			top: 462
		}),
		0,
		300);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-29'),.5,{
			top: 615
		}),
		0,
		450);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-36'),.5,{
			top: 925
		}),
		0,
		600);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-8'),.5,{
			top: 155
		}),
		0,
		750);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-11'),.5,{
			top: 155
		}),
		0,
		4700);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-13'),.5,{
			top: 309
		}),
		0,
		1050);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-16'),.5,{
			top: 310
		}),
		0,
		1200);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-4'),.5,{
			top: 0
		}),
		0,
		1350);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-26'),.5,{
			top: 615
		}),
		0,
		1500);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-40'),.5,{
			top: 925
		}),
		0,
		1650);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-35'),.5,{
			top: 770
		}),
		0,
		1800);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-32'),.5,{
			top: 770
		}),
		0,
		1950);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-23'),.5,{
			top: 465
		}),
		0,
		6300);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-22'),.5,{
			top: 465
		}),
		0,
		2250);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-25'),.5,{
			top: 615
		}),
		0,
		2400);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-15'),.5,{
			top: 310
		}),
		0,
		2550);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-27'),.5,{
			top: 615
		}),
		0,
		2700);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-20'),.5,{
			top: 465
		}),
		0,
		2850);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-10'),.5,{
			top: 155
		}),
		0,
		3000);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-7'),.5,{
			top: 155
		}),
		0,
		3150);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-31'),.5,{
			top: 770
		}),
		0,
		3300);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-33'),.5,{
			top: 770
		}),
		0,
		3450);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-21'),.5,{
			top: 465
		}),
		0,
		2700);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-17'),.5,{
			top: 310
		}),
		0,
		6150);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-18'),.5,{
			top: 465
		}),
		0,
		3900);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-14'),.5,{
			top: 310
		}),
		0,
		2550);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-5'),.5,{
			top: 0
		}),
		0,
		5750);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-3'),.5,{
			top: 0
		}),
		0,
		5350);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-12 '),.5,{
			top: 309
		}),
		0,
		3150);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-9'),.5,{
			top: 155
		}),
		0,
		3000);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-28'),.5,{
			top: 615
		}),
		0,
		3450);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-24'),.5,{
			top: 615
		}),
		0,
		3650);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-6'),.5,{
			top: 155
		}),
		0,
		5300);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-2'),.5,{
			top: 0
		}),
		0,
		3950);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-1'),.5,{
			top: 0
		}),
		0,
		3300);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-30'),.5,{
			top: 770
		}),
		0,
		3900);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-42'),.5,{
			top: 0
		}),
		0,
		4250);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-30'),.5,{
			top: 770
		}),
		0,
		4400);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-34'),.5,{
			top: 770
		}),
		0,
		5600);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-37'),.5,{
			top: 925
		}),
		0,
		4700);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-38'),.5,{
			top: 925
		}),
		0,
		4850);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-39'),.5,{
			top: 925
		}),
		0,
		4000);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-43'),.5,{
			top: 924
		}),
		0,
		5000);

	this.controller.addTween('body', 
		TweenMax.to($('.st2-41'),.5,{
			top: 925
		}),
		0,
		5150);

	this.controller.addTween('body', 
		TweenMax.to($('.st5-0'),.5,{
			top: 0
		}),
		0,
		5900);

	this.controller.addTween('body', 
		TweenMax.to($('.st5-1'),.5,{
			top: 925
		}),
		0,
		5450);



	this.controller.addTween('body', 
		TweenMax.to($('#almond .scrollBox'),.5,{
			top: 0
		}),
		6450,
		0);
}