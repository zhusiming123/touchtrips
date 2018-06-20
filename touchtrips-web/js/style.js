$(document).ready(function(){
	  $(window).scroll( function() {
        var scrollTop =$(document).scrollTop();
        if(scrollTop>0){
            $(".header-center").css({
				"background":"white",
				"box-shadow":"0px 2px 4px 0px rgba(0,0,0,0.32)"
			})
            $(".header").css({
				"background":"white"
			})
            $(".navbar-default .navbar-nav>li>a").css({
            	"color":"#737373"
            })
            $("#logo-back").addClass("header-imgB").removeClass("header-img")
            $("#Blog a").css({
            	"color":"#00231b",
            	"border":"1px solid #00231b"
            })
        }else{
            $(".header-center").css({
				"background":"transparent",
				"box-shadow":"none"
			})
            $(".header").css({
				"background":"transparent"
			})
            $(".navbar-default .navbar-nav>li>a").css({
            	"color":"white"
            })
            $("#logo-back").addClass("header-img").removeClass("header-imgB")
            $("#Blog a").css({
            	"color":"white",
            	"border":"1px solid white"
            })
        }
        console.log(scrollTop)
        if(580<scrollTop&&scrollTop<=1280){
        	
        	$(".top-ABOUT").css({
        		"font-family":"NotoSansHans-Bold",
				"color":"#000000"
        	})
        }
        if(1280<scrollTop&&scrollTop<=1900){
        	$(".top-PARTNERS").css({
        		"font-family":"NotoSansHans-Bold",
				"color":"#000000"
        	})
        }
        if(scrollTop>1900){
        	$(".top-CONTACT").css({
        		"font-family":"NotoSansHans-Bold",
				"color":"#000000"
        	})
        }
    });
	
	
	
	
var scrollFunc = function (e) {  
        e = e || window.event;
        var index = 0
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
               
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            
            }
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向上滚动时  
              
            }  
            if (e.detail< 0) { //当滑轮向下滚动时  
                
            }  
        }  
    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc;   
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})