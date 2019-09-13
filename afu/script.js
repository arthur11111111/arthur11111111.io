
$(function(){
	$('#tp').click(function(){
		$('html,body').animate({scrollTop:$('#top').offset().top}, 500);
	});
	$('#intro').click(function(){
		$('html,body').animate({scrollTop:$('#introduce').offset().top}, 500);
	});
	$('#sv').click(function(){
		$('html,body').animate({scrollTop:$('#Services').offset().top}, 500);
	});
	$('#ca').click(function(){
		$('html,body').animate({scrollTop:$('#Case').offset().top}, 500);
	});
	$('#ct').click(function(){
		$('html,body').animate({scrollTop:$('#contact').offset().top}, 500);
	});


});


$(window).scroll(function(evt){
  if($(window).scrollTop()>0)
    {
      $('.navbar').removeClass('navbar-top')
    }else{
      $('.navbar').addClass('navbar-top')
    }
});
