
$(function(){
	var w=$(window).width();
	$('.nav li').hover(function(){
		$(this).removeClass('on');
		if(w<768){
			$(this).find('dl').stop(true,true).slideUp(500).css('display','block');
		}else{
			$(this).find('dl').stop(true,true).slideDown(500);
			$(this).find('i').stop().css('height',2).animate({left:0,width:"100%"},200);
		}	
	},function(){
		$(this).find('dl').stop(true,true).slideUp(500);
		$(this).find('i').stop().animate({left:'50%',width:0},200);	
	})
	

//首页焦点图	
	$(".index_banner").slide({ titCell:"", mainCell:".banner_img", effect:"leftLoop",vis:1,scroll:1,delayTime:500,trigger:"click", pnLoop:true,autoPage:true,autoPlay:true});
	//业绩展示

});

$(function(){
    function tabs(tabTit,on,tabCon){
        $(tabTit).children().click(function(){
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
      });
  };
    tabs(".results_left","active",".results_right");
});

	