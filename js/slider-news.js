$(function(){

	var wrapper = $('.wrapper-news');
	var p =  wrapper.find('p');

	wrapper.width( p.length * p.outerWidth(true) );

	p.each(function(){
		var $this = $(this);
		var index = $this.index();

		$this.css('left', $this.width() * index + 50);

	});
	p.eq(0).css('left', 28);

	if( !p.length > 1 ) return;

	function shownews(){

		wrapper.find('p').each(function(){

			var $this = $(this);

			if( $this.index() === p.length - 1 ){

				$this.css( 'left', -$this.width() )
				size = 30;
				animate($this, size);
				$this
					.detach()
					.prependTo(wrapper)

			}
			else{
				animate( $this,  $this.width() + 100 );
			}

		});

	}

	function animate(element, left){
		element.animate({
			'left' : left
		});
	}

	setInterval(shownews, 3000);

});