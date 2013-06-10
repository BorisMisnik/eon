var app = {
	initScroll : function(){

		$('body').bind('mousewheel', function(event, delta){
			this.scrollTop -= (delta * 25);
			if( delta > 0 ){
				app.hideCitrus();
				app.hideAlmond();
				app.hideGinger();
			}
			else{
				// app.controller.triggerCheckAnim(true);
			}
		});
	},
	mobile : function(){
		var controller = this.controller;
		
		if (Modernizr.touch){
			var scrollPos = 0;
			var myScroll = new iScroll('viewport-wrapper', {vScrollbar: true, hScroll: false, vScroll: true, bounce: false, useTransform: false, useTransition: false});
			function animationLoop () {
				window.requestAnimationFrame(animationLoop);
				if (myScroll.y != scrollPos) { 
					scrollPos = myScroll.y;
					controller.setScrollContainerOffset(0, -myScroll.y);
					controller.triggerCheckAnim(true);
				}
			}
		}
		
		$('body').get(0).addEventListener("touchmove", function() {
			animationLoop ();
		});
	},
	draggable : function(){

		$('.drag').draggable({
			axis: 'y',
			scroll: false,
			drag : function(event, ui){
				if( ui.position.top <= -360 ){
					ui.position.top = -360;
				}
				else if ( ui.position.top >= 0 ){
					ui.position.top = 0;
				}
			}
		});

	},
	hoverNews : function(){
		var boxNews = $('.box-news');
		var timer;

		function hide(){
			TweenMax.to(boxNews, 0.3,{
				left   : -310,
				ease   : Circ.easeOut
			});
		};

		$('.news').on({
			mouseenter : function(){
				console.log( 123 );
				clearTimeout(timer);
				TweenMax.to(boxNews, 0.3,{
					left   : 0,
					ease   : Circ.easeOut
				});
			},
			mouseleave : function(){
				timer = setTimeout(hide,500);		
			}
		})

		boxNews.on({
			mousemove : function(){
				clearTimeout(timer);
				TweenMax.to(boxNews, 0.3,{
					left   : 0,
					ease   : Circ.easeOut
				});
			},
			mouseleave : function(){
				timer = setTimeout(hide,500);	
			}
		})
	},

	hideAlmond : function(){

		if( $(document).scrollTop() === 0 && $('#almond').is(':visible') && !$('#main').is(':animated') ){

			$('#almond').fadeOut();
			$('#main').fadeIn();
			$('#container').css('height', 'auto');
			$('.yellow img').off();

			setTimeout(function(){
				$('.yellow img').on({
					mouseenter : function(){
						app.almondImageHover();
					}
				});
			}, 1000);
		}

	},

	hideCitrus : function(){

		if( $(document).scrollTop() === 0 && $('#orange').is(':visible') && !$('#main').is(':animated') ){

			$('#orange').fadeOut();
			$('#main').fadeIn();
			$('#container').css('height', 'auto');
			$('.orange img').off();

			setTimeout(function(){
				$('.orange img').on({
					mouseenter : function(){
						app.orangeImageHover();
					}
				});
			}, 1000);
		}
	},

	hideGinger : function(){

		if( $(document).scrollTop() === 0 && $('#ginger').is(':visible') && !$('#main').is(':animated') ){

			$('#ginger').fadeOut();
			$('#main').fadeIn();
			$('#container').css('height', 'auto');
			$('.blue img').off();

			setTimeout(function(){
				$('.blue img').on({
					mouseenter : function(){
						app.gingerImageHover();
					}
				});
			}, 1000);
		}
	},
	hideMassage: function(){
		$('.logo-scroll .box').on('click', function(){
			if( $(this).is('.now') ) return;
			$('.contnetScroll p').hide();
			$('.contnetScroll a').hide();
		});
	}
}

$(document).ready(function(){
	app.controller = $.superscrollorama({
		triggerAtCenter: true,
		playoutAnimations: false,
		reverse: true,
		immediately: true
	});
	app.initScroll();
	app.mobile();
	app.draggable();
	app.hoverNews();
	app.hideMassage();

	// orange
	app.initOrange();

	// ginger
	app.initGinger();

	// almond
	app.initAlmond();
})
$(window).resize(function () {
	app.controller.triggerCheckAnim(true);
});