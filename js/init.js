var app = {
	initScroll : function(){
		$('html').niceScroll();	
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

	hideMassage: function(){
		$('.logo-scroll .box').on('click', function(){
			if( $(this).is('.now') ) return;
			$('.contnetScroll p').hide();
			$('.contnetScroll a').hide();
		});
	},

	returnToMain: function(){

		$('.logo-scroll .news, .logo-scroll .buttonNews').on('click', function(e){

			e.preventDefault();

			TweenMax.to($('body'), 1, {
				scrollTop: 0,
				onComplete: show
			});

		});

		function show(){
			app.elements.drag.hide().css('position', 'relative');

			TweenMax.to(app.elements.colomun, .4, {
				'marginTop': '0'
			});

		}

	}	
}
$(document).on({

	ready: function(){

		app.initScroll();
		app.hoverNews();
		app.hideMassage();
		app.returnToMain();
		//
		app.elements = {
			htmlBody : $('html, body'),
			body : $('body'),
			citrus : $('#orange'),
			almond : $('#almond'),
			ginger : $('#ginger'),
			container : $('#container'),
			main : $('#main'),
			drag : $('.drag'),
			colomun : $('.orange, .blue, .yellow')
		}

		app.initOrange();
		app.elements.almond.hide();
		app.elements.ginger.hide();
		// app.initGinger();
		// app.initAlmond();
	}
});
