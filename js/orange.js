app.initOrange = function(){

	$('#orange').hide();

	$('.orange img').on({
		mouseenter : function(){
			app.orangeImageHover();
		}
	});

	app.scoterElement = $('.sScoter, .scoter');
	app.lifeElement = $('.life, .sLife');
	app.planeElement = $('.plane, .s2-7');
	app.cityElement = $('.city, .sCity');
	app.fruitElement = $('.s2-6, .fruit');

	app.showOrange();
	app.startOrange();
	app.fruit();
	app.plane();
	app.city();
	app.scoter();
	app.life();		

};
app.showOrange = function(){
	var orange = $('.logo-scroll').find('.box.o');

	orange.on({
		click : function(e){
			e.preventDefault();

			if( $(this).is('.now') ) return;

			var second = $('body').scrollTop() === 0 ? 0 : 3;
			var s1 = $('#orange .s1');
				s1.css({
				'position' : 'relative',
				'top' : '1300px'
			});

			app.scoterElement.hide().css('top', '1300px');
			app.lifeElement.hide().css('top', '1300px');
			app.planeElement.hide().css('top', '1300px');
			app.cityElement.hide().css('top', '1300px');
			app.fruitElement.hide().css('top', '1300px');

			TweenMax.to($('body'), second, {
				scrollTop: 0,
				onComplete: show
			});


			function show(){
				$('html, body').scrollTop(0);

				$('#ginger').hide();
				$('#almond').hide();
				$('#orange').show();

				$('#container').height(9500);
				TweenMax.staggerTo(s1, 0.1,{
					'top' : 0
				}, 0.1);
				// app.controller.triggerCheckAnim(true);
			}

		}
	});

};
app.orangeImageHover = function(){

	$('#main').fadeOut(function(){
		// $('html, body').scrollTop(0);
		// app.controller.triggerCheckAnim(true);
		
		var s1 = $('#orange .s1');
		s1.css({
			'position' : 'relative',
			'top' : '1300px'
		});

		app.scoterElement.hide().css('top', '1300px');
		app.lifeElement.hide().css('top', '1300px');
		app.planeElement.hide().css('top', '1300px');
		app.cityElement.hide().css('top', '1300px');
		app.fruitElement.hide().css('top', '1300px');

		$('#ginger').hide();
		$('#almond').hide();
		$('#orange').fadeIn(function(){
			$('#container').height(8500);
				TweenMax.staggerTo(s1, 0.1,{
						'top' : 0
				}, 0.1);
			
		});

	});
};

app.fruit = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.s2-6, .fruit'),.5,{
				css : {
					top: '114px',
					display: 'block'
				},
				onStart: function(){
					$('.s2-6, .fruit').show()
				}
			}),
			0,
		650);
	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.s2-6, .fruit'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.s2-6, .fruit').css('top', '1300px');
				}
			}),
			0,
		1500);

	}

	show();
	hide();

	$('.s2-6').on('click', function(e){
		e.preventDefault()
		
		if( $('.fruit').is(':visible') )
			$('.fruit').hide();
		else
			$('.fruit').show();
	});


	$('span[name="fruit"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 650,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});
		// show();
		// hide();

		$('.sScoter, .scoter').hide();
		$('.life, .sLife').hide();
		$('.plane, .s2-7').hide();
		$('.city, .sCity').hide();
		$('.s2-6, .fruit').show();

	});
}

app.plane = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.s2-7, .plane'),.5,{
				css : {
					'display': 'block',
					top: '114px'
				},
				onStart: function(){
					$('.s2-7, .plane').show()
				}
			}),
			0,
		3800);
	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.s2-7, .plane'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.s2-7, .plane').css('top', '1300px')
				}
			}),
			0,
		4550);

	}

	show();
	hide();

	$('.s2-7').on('click', function(e){
		e.preventDefault();

		if( $('.plane').is(':visible') )
			$('.plane').hide();
		else
			$('.plane').show();

	});


	$('span[name="plane"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 3800,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});
		// show();
		// hide();

		$('.sScoter, .scoter').hide();
		$('.life, .sLife').hide();
		$('.city, .sCity').hide();
		$('.s2-6, .fruit').hide();
		$('.plane, .s2-7').show();

	});

};

app.city = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sCity, .city'),.5,{
				top: '114px',
				onStart: function(){
					$('.sCity, .city').show()
				}
			}),
			0,
		4600);
	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sCity, .city'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sCity, .city').css('top', '1300px')
				}
			}),
			0,
		5100);

	}

	hide();
	show();
	
	$('.sCity').on('click', function(e){
		e.preventDefault();

		if( $('.city').is(':visible') )
			$('.city').hide();
		else
			$('.city').show();
	});


	$('span[name="city"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 4600,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.setOffsetPosition(0, 4750)

		// hide();
		// show();

		$('.sScoter, .scoter').hide();
		$('.life, .sLife').hide();
		$('.s2-6, .fruit').hide();
		$('.plane, .s2-7').hide();
		$('.city, .sCity').show();

	});

};

app.life = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sLife, .life'),.5,{
				top: '467px',
				onStart: function(){
					$('.sLife, .life').show()
				}
			}),
			0,
		5900);
	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sLife, .life'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sLife, .life').css('top', '1300px')
				}
			}),
			0,
		6450);

	}

	show();
	hide();

	$('.sLife').on('click', function(e){
		e.preventDefault();

		if( $('.life').is(':visible') )
			$('.life').hide();
		else
			$('.life').show();
	});


	$('span[name="life"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 5900,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});

		// show();
		// hide();

		$('.sScoter, .scoter').hide();
		$('.s2-6, .fruit').hide();
		$('.plane, .s2-7').hide();
		$('.city, .sCity').hide();
		$('.life, .sLife').show();

	});

};

app.scoter = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sScoter, .scoter'),.5,{
				top: '114px',
				onStart: function(){
					$('.sScoter, .scoter').show()
				}
			}),
			0,
		5750);
	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sScoter, .scoter'),.3,{
				top: '-500px',
				onComplete: function(){
					$('.sScoter, .scoter').css('top', '1300px')
				}
			}),
			0,
		6300);

	}

	hide();
	show();
	
	$('.sScoter').on('click', function(e){
		e.preventDefault();

		if( $('.scoter').is(':visible') )
			$('.scoter').hide();
		else
			$('.scoter').show();
	});

	$('span[name="scoter"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 5750,
				onComplete: function(){
					// app.controller.triggerCheckAnim(true);
				}
			});

		// hide();
		// show();
		
		$('.s2-6, .fruit').hide();
		$('.plane, .s2-7').hide();
		$('.city, .sCity').hide();
		$('.life, .sLife').hide();
		$('.sScoter, .scoter').show();

	});
}

app.startOrange = function(){

		// 2
		this.controller.addTween('body', 
			TweenMax.from($('#orange .s2'),.5,{
				css:{opacity:0}}),
			0,
			75);
		this.controller.addTween('body', 
			TweenMax.to($('.s2-1'),.5,{
				css:{top:'155px'}}),
			0,
			350);

		this.controller.addTween('body', 
			TweenMax.to($('.s2-2'),.5,{
				css:{bottom:'457px'}}),
			0,
			350);
		this.controller.addTween('body', 
			TweenMax.to($('.s2-3'),.5,{
				bottom:'457px',
				delay : 0.5
			}),
			0,
			350);

		this.controller.addTween('body', 
			TweenMax.to($('.s2-4'),.5,{
				bottom:'302px',
			}),
			0,
			450);

		this.controller.addTween('body', 
			TweenMax.to($('.s2-5'),.5,{
				bottom:'302px',
			}),
			0,
			550);


		// step-3

		this.controller.addTween('body', 
			TweenMax.to($('.s3-1'),.5,{
				top:'309px'
			}),
			0,
			850);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-2'),.2,{
				top:'462px'
			}),
			0,
			1750);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-3'),.5,{
				top:'311px'
			}),
			0,
			1050);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-4'),.5,{
				top:'310px',
				delay : 2
			}),
			0,
			1150);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-13'),.5,{
				top:'310px',
				delay : 2
			}),
			0,
			1250);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-5'),.5,{
				top:'153px'
			}),
			0,
			1350);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-6'),.5,{
				top:'461px'
			}),
			0,
			1450);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-7'),.5,{
				top:'769px'
			}),
			0,
			1550);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-8'),.5,{
				top:'742px',
				delay : 1
			}),
			0,
			1650);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-9'),.2,{
				top:'614px'
			}),
			0,
			1750);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-11'), .2,{
				top:'614px'
			}),
			0,
			1750);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-10'),.2,{
				top:'465px'
			}),
			0,
			1750);
		this.controller.addTween('body', 
			TweenMax.to($('.s3-12'),.5,{
				top:'770px'
			}),
			0,
			2050);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-14'),.5,{
				top:'616px'
			}),
			0,
			2150);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-15'),.5,{
				top:'467px'
			}),
			0,
			2250);

		this.controller.addTween('body', 
			TweenMax.to($('.s3-16'),.5,{
				top:'0'
			}),
			0,
			2250);

		// 3б
		this.controller.addTween('body', 
			TweenMax.to($('.s4-1'),.3,{
				top:'161px'
			}),
			0,
			2550);

		this.controller.addTween('body', 
			TweenMax.to($('.s4-2'),.3,{
				bottom:'456px',
				delay : 0.5
			}),
			0,
			2650);

		this.controller.addTween('body', 
			TweenMax.to($('.s4-3'),.3,{
				bottom:'456px',
				delay : 1
			}),
			0,
			2750);

		this.controller.addTween('body', 
			TweenMax.to($('.s4-4'),.3,{
				bottom:'300px',
				delay : 1.5
			}),
			0,
			2850);

		this.controller.addTween('body', 
			TweenMax.to($('.s4-5'),.3,{
				bottom:'300px',
				delay : 2
			}),
			0,
			2950);
	// 4
		this.controller.addTween('body', 
			TweenMax.to($('.s5-0'),.3,{
				top:'158px'
			}),
			0,
			3150);

		this.controller.addTween('body', 
			TweenMax.to($('.s5-1'),.3,{
				top:'307px'
			}),
			0,
			3300);

		this.controller.addTween('body', 
			TweenMax.to($('.s5-2'),.3,{
				top:'308px'
			}),
			0,
			3450);

		this.controller.addTween('body', 
			TweenMax.to($('.s5-3'),.3,{
				top:'466px'
			}),
			0,
			3550);

		this.controller.addTween('body', 
			TweenMax.to($('.s5-4'),.3,{
				top:'623px'
			}),
			0,
			3700);

		this.controller.addTween('body', 
			TweenMax.to($('.s5-5'),.3,{
				top:'466px'
			}),
			0,
			3700);
		// 6
		this.controller.addTween('body', 
			TweenMax.to($('.s6-0'),.3,{
				top:'298px'
			}),
			0,
			4000);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-1'),.3,{
				top:'298px'
			}),
			0,
			4150);
		this.controller.addTween('body', 
			TweenMax.to($('.s6-2'),.3,{
				top:'94px'
			}),
			0,
			4250);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-3'),.3,{
				top:'250px'
			}),
			0,
			4350);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-4'),.3,{
				top:'94px'
			}),
			0,
			4450);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-5'),.3,{
				top:'249px'
			}),
			0,
			4550);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-6'),.3,{
				top:'404px'
			}),
			0,
			4650);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-7'),.3,{
				top:'616px'
			}),
			0,
			4750);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-8'),.3,{
				top:'765px'
			}),
			0,
			4850);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-9'),.3,{
				top:'740px'
			}),
			0,
			4950);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-10'),.3,{
				top:'615px'
			}),
			0,
			5050);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-11'),.3,{
				top:'146px'
			}),
			0,
			5150);

		this.controller.addTween('body', 
			TweenMax.to($('.s6-11'),.3,{
				top:'94px'
			}),
			0,
			5300);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-0'),.3,{
				opacity: 1
			}),
			0,
			5450);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-1'),.3,{
				top:'439px'
			}),
			0,
			5600);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-2'),.3,{
				top:'550px'
			}),
			0,
			5750);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-3'),.3,{
				top:'770px'
			}),
			0,
			5900);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-5'),.3,{
				bottom:'149px'
			}),
			0,
			6050);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-6'),.3,{
				bottom:'452px'
			}),
			0,
			6200);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-7'),.3,{
				bottom:'297px'
			}),
			0,
			6350);

		this.controller.addTween('body', 
			TweenMax.to($('.s7-8'),.3,{
				bottom:'148px'
			}),
			0,
			6500);

		this.controller.addTween('body', 
			TweenMax.to($('.s8-0'),.3,{
				opacity: 1
			}),
			0,
			6650);

		this.controller.addTween('body', 
			TweenMax.to($('.s8-1'),.3,{
				top: 0
			}),
			0,
			6800);

		this.controller.addTween('body', 
			TweenMax.to($('.s8-2'),.3,{
				top: '154px'
			}),
			0,
			6950);

		this.controller.addTween('body', 
			TweenMax.to($('.s8-3'),.3,{
				top: '0'
			}),
			0,
			7050);

		this.controller.addTween('body',
			TweenMax.to($('.s8-4'),.3,{
				top: '926px'
			}),
			0,
			7200);

		this.controller.addTween('body',
			TweenMax.to($('.s8-5'),.3,{
				top: '926px'
			}),
			0,
			7350);

		this.controller.addTween('body',
			TweenMax.to($('.s8-6, .s8-7'),.3,{
				top: '925px'
			}),
			0,
			7500);

		this.controller.addTween('body',
			TweenMax.to($('#orange .scrollBox'),.3,{
				top: '0'
			}),
			7500,
			0);


	};
