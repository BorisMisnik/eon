app.initGinger = function(){

	$('#ginger').hide();

	$('.blue img').on({
		mouseenter : function(){
			app.gingerImageHover();
		}
	});

	app.carElement = $('.sCar, .car');
	app.oneElement = $('.sOne, .one');
	app.bootElement = $('.sBoot, .boot');
	app.fruElement = $('.sFru, .fru');
	app.mobileElement = $('.sMobile, .mobile');
	app.clockElement = $('.sClock, .clock');

	app.showGinger();
	app.startGinger();
	app.clock();
	app.car();
	app.one();
	app.boot();
	app.fru();
	app.mobile();
};

app.showGinger= function(){
	var ginger = $('.logo-scroll').find('.box.b');

	ginger.on({
		click : function(e){
			e.preventDefault();

			if( $(this).is('.now') ) return;

			var second = $('body').scrollTop() === 0 ? 0 : 3;
			var s1 = $('#ginger .s1');
			s1.css({
				'position' : 'relative',
				'top' : '1300px'
			});

			app.carElement.hide().css('top', '1300px');
			app.oneElement.hide().css('top', '1300px');
			app.bootElement.hide().css('top', '1300px');
			app.fruElement.hide().css('top', '1300px');
			app.mobileElement.hide().css('top', '1300px');
			app.clockElement.hide().css('top', '1300px');

			TweenMax.to($('body'), second, {
				scrollTop: 0,
				onComplete: show
			});

			function show(){
				// $('html, body').scrollTop(0);
				$('#orange').hide();
				$('#almond').hide();
				$('#ginger').show();
				$('#container').height(7300);
				TweenMax.staggerTo(s1, 0.1,{
					'top' : 0
				}, 0.1);
				// app.controller.triggerCheckAnim(true);
				// $('.st4-30').css('top','1300px')
			}
		}
	});
};

app.gingerImageHover = function(){
	
	$('#main').fadeOut(function(){

		var s1 = $('#ginger .s1');
		s1.css({
			'position' : 'relative',
			'top' : '1300px'
		});

		app.carElement.hide().css('top', '1300px');
		app.oneElement.hide().css('top', '1300px');
		app.bootElement.hide().css('top', '1300px');
		app.fruElement.hide().css('top', '1300px');
		app.mobileElement.hide().css('top', '1300px');
		app.clockElement.hide().css('top', '1300px');

		$('#orange').hide();
		$('#almond').hide();
		$('#ginger').fadeIn(function(){
			// $('html, body').scrollTop(0);
			$('#container').height(7300);
				TweenMax.staggerTo(s1, 0.1,{
						'top' : 0
				}, 0.1);
			});
		});

		// app.controller.triggerCheckAnim(true);
};

app.clock = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sClock, .clock'),.5,{
				top: '465px',
				onStart: function(){
					$('.sClock, .clock').show()
				}
			}),
			0,
		2500);
	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sClock, .clock'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sClock, .clock').css('top', '1300px')
				}
			}),
			0,
		3150);

	}

	show();
	hide();

	$('.sClock').on('click', function(e){

		e.preventDefault();

		if(  $('.clock').css('display') === 'block' ||   $('.clock').css('display') === 'inline' ){
			$('.clock').hide();
		}
		else{
			$('.clock').show();
		}

	});

	$('span[name="clock"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 2500,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sCar, .car').hide();
		$('.sOne, .one').hide();
		$('.sBoot, .boot').hide();
		$('.sFru, .fru').hide();
		$('.sMobile, .mobile').hide();
		$('.sClock, .clock').show();

	});


};
app.car = function(){

	function show(){

		app.controller.addTween('body', 
			TweenMax.to($('.sCar, .car'),.5,{
				top: '271px',
				onStart: function(){
					$('.sCar, .car').show();
				}
			}),
		0,
		3900);
	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sCar, .car'),.5,{
				top: '-500px',
				onComplete: function(){
						$('.sCar, .car').css('top', '1300px')
				}
			}),
			0,
		4550);

	}

	show();
	hide();

	$('.sCar').on('click', function(e){

		e.preventDefault();

		if( $('.car').css('display') === 'block' ||   $('.car').css('display') === 'inline' ){
			$('.car').hide();
		}
		else{
			$('.car').show();
		}

	});

	$('span[name="car"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 3900,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sClock, .clock').hide();
		$('.sOne, .one').hide();
		$('.sBoot, .boot').hide();
		$('.sFru, .fru').hide();
		$('.sMobile, .mobile').hide();
		$('.sCar, .car').show();
	});

};
app.one = function(){

	function show(){

		app.controller.addTween('body', 
			TweenMax.to($('.sOne, .one'),.5,{
				top: '576px',
				onStart: function(){
					$('.sOne, .one').show();
				}
			}),
		0,
		3000);

	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sOne, .one'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sOne, .one').css('top', '1300px')
				}
			}),
		0,
		3600);
	}

	show();
	hide();

	$('.sOne').on('click', function(e){

		e.preventDefault();

		if( $('.one').css('display') === 'block' ||   $('.one').css('display') === 'inline' ){
			$('.one').hide();
		}
		else{
			$('.one').show();
		}

	});

	$('span[name="one"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 3000,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sClock, .clock').hide();
		$('.sCar, .car').hide();
		$('.sBoot, .boot').hide();
		$('.sFru, .fru').hide();
		$('.sMobile, .mobile').hide();
		$('.sOne, .one').show();
	});

};
app.boot = function(){

	function show(){

		app.controller.addTween('body', 
			TweenMax.to($('.sBoot, .boot'),.5,{
				top: '271px',
				onStart: function(){
					$('.sBoot, .boot').show();
				}
			}),
		0,
		4550);

	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sBoot, .boot'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sBoot, .boot').css('top', '1300px')
				}
			}),
		0,
		5000);

	}

	show();
	hide();


	$('.sBoot').on('click', function(e){

		e.preventDefault();

		if( $('.boot').css('display') === 'block' ||   $('.boot').css('display') === 'inline' ){
			$('.boot').hide();
		}
		else{
			$('.boot').show();
		}

	});

	$('span[name="boot"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 4400,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sClock, .clock').hide();
		$('.sCar, .car').hide();
		$('.sOne, .one').hide();
		$('.sFru, .fru').hide();
		$('.sMobile, .mobile').hide();
		$('.sBoot, .boot').show();
	});
};
app.fru = function(){

	function show(){

		app.controller.addTween('body', 
			TweenMax.to($('.sFru, .fru'),.5,{
				top: '576px',
				onStart: function(){
					$('.sFru, .fru').show();
				}
			}),
		0,
		5350);

	}
	function hide(){

		app.controller.addTween('body', 
			TweenMax.to($('.sFru, .fru'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sFru, .fru').css('top', '1300px')
				}
			}),
		0,
		5700);
	}

	show();
	hide();

	$('.sFru').on('click', function(e){

		e.preventDefault();

		if( $('.fru').css('display') === 'block' ||   $('.fru').css('display') === 'inline' ){
			$('.fru').hide();
		}
		else{
			$('.fru').show();
		}

	});

	$('span[name="fru"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 5350,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sClock, .clock').hide();
		$('.sCar, .car').hide();
		$('.sOne, .one').hide();
		$('.sBoot, .boot').hide();
		$('.sMobile, .mobile').hide();
		$('.sFru, .fru').show();
	});
};

app.mobile = function(){

	function show(){
		app.controller.addTween('body', 
			TweenMax.to($('.sMobile, .mobile'),.5,{
				top: '116px',
				onStart: function(){
					$('.sMobile, .mobile').show();
				}
			}),
		0,
		5350);
	}
	function hide(){
		app.controller.addTween('body', 
			TweenMax.to($('.sMobile, .mobile'),.5,{
				top: '-500px',
				onComplete: function(){
					$('.sMobile, .mobile').css('top', '1300px')
				}
			}),
		0,
		6000);
	}

	show();
	hide();

	$('.sMobile').on('click', function(e){

		e.stopImmediatePropagation();
		e.preventDefault();

		if( $('.mobile').css('display') === 'block' ||  $('.mobile').css('display') === 'inline' ){
			$('.mobile').hide();
		}
		else{
			$('.mobile').show();
		}

	});

	$('span[name="mobile"]').on('click', function(){
		TweenMax.to($('body'),1 ,{
				scrollTop : 5350,
				onComplete: function(){
					app.controller.triggerCheckAnim(true);
				}
			});
		// app.controller.triggerCheckAnim(true);
		// show();
		// hide();

		$('.sClock, .clock').hide();
		$('.sCar, .car').hide();
		$('.sOne, .one').hide();
		$('.sBoot, .boot').hide();
		$('.sFru, .fru').show();
		$('.sMobile, .mobile').show();
	});
}


app.startGinger = function(){


	this.controller.addTween('body', 
		TweenMax.to($('.st4-0'),.5,{
			top: 0
		}),
		0,
		450);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-19'),.5,{
			top: 462
		}),
		0,
		300);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-29'),.5,{
			top: 615
		}),
		0,
		450);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-36'),.5,{
			top: 925
		}),
		0,
		600);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-8'),.5,{
			top: 155
		}),
		0,
		750);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-11'),.5,{
			top: 155
		}),
		0,
		4700);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-13'),.5,{
			top: 309
		}),
		0,
		1050);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-16'),.5,{
			top: 310
		}),
		0,
		1200);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-4'),.5,{
			top: 0
		}),
		0,
		1350);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-26'),.5,{
			top: 615
		}),
		0,
		1500);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-40'),.5,{
			top: 925
		}),
		0,
		1650);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-35'),.5,{
			top: 770
		}),
		0,
		1800);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-32'),.5,{
			top: 770
		}),
		0,
		1950);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-23'),.5,{
			top: 465
		}),
		0,
		6300);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-22'),.5,{
			top: 465
		}),
		0,
		2250);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-25'),.5,{
			top: 615
		}),
		0,
		2400);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-15'),.5,{
			top: 310
		}),
		0,
		2550);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-27'),.5,{
			top: 615
		}),
		0,
		2700);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-20'),.5,{
			top: 465
		}),
		0,
		2850);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-10'),.5,{
			top: 155
		}),
		0,
		3000);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-7'),.5,{
			top: 155
		}),
		0,
		3150);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-31'),.5,{
			top: 770
		}),
		0,
		3300);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-33'),.5,{
			top: 770
		}),
		0,
		3450);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-21'),.5,{
			top: 465
		}),
		0,
		2700);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-17'),.5,{
			top: 310
		}),
		0,
		6150);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-18'),.5,{
			top: 465
		}),
		0,
		3900);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-14'),.5,{
			top: 310
		}),
		0,
		2550);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-5'),.5,{
			top: 0
		}),
		0,
		5750);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-3'),.5,{
			top: 0
		}),
		0,
		5350);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-12 '),.5,{
			top: 309
		}),
		0,
		3150);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-9'),.5,{
			top: 155
		}),
		0,
		3000);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-28'),.5,{
			top: 615
		}),
		0,
		3450);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-24'),.5,{
			top: 615
		}),
		0,
		3650);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-6'),.5,{
			top: 155
		}),
		0,
		3800);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-2'),.5,{
			top: 0
		}),
		0,
		3950);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-1'),.5,{
			top: 0
		}),
		0,
		3300);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-30'),.5,{
			top: 770
		}),
		0,
		3900);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-30'),.5,{
			top: 770
		}),
		0,
		4400);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-34'),.5,{
			top: 770
		}),
		0,
		5600);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-37'),.5,{
			top: 925
		}),
		0,
		4700);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-38'),.5,{
			top: 925
		}),
		0,
		4850);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-39'),.5,{
			top: 925
		}),
		0,
		4000);

	this.controller.addTween('body', 
		TweenMax.to($('.st4-41'),.5,{
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
		TweenMax.to($('#ginger .scrollBox'),.5,{
			top: 0
		}),
		6150,
		0);


}