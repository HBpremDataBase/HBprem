$(document).ready(function(){
	
	
	var _this1=null;
	$('.navbar-nav>li').hover(function(){
		$(this).children('a').css("color","#FFFFCC");
		_this1=$(this);
		_this1.find('.ul-2').slideDown(600);
		_this1.find('.ul-2').css("border-top","1px solid #fff");
		/*var _this2=null;
		_this1.find('.ul-2').find('li').hover(function(){
			_this2=$(this);
			_this2.find('.ul-3').show();
			_this2.find('.ul-3').hover(function(){
				$(this).show();
			},function(){
				$(this).hide();
			}); 
		},function(){
			_this2.find('.ul-3').hide();
		});*/
	},function(){
		_this1.find('.ul-2').hide();
		$(this).children('a').css("color","#fff");
		_this1.find('.ul-2').css("border-top","none");
	});
	

	
	
});