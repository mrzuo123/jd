
$(function(){
	
	$("#city").hover(function(){
		$(".china_city_list").css({"display":"block"})
	},function(){
		$(".china_city_list").css({"display":"none"})
	});
	$(".ttbar_myjd").hover(function(){
		$(".myjd_list").css({"display":"block"})
	},function(){
		$(".myjd_list").css({"display":"none"})
	});
	$(".company").hover(function(){
		$(".company_list").css({"display":"block"})
	},function(){
		$(".company_list").css({"display":"none"})
	});
	$(".service").hover(function(){
		$(".service_list").css({"display":"block"})
	},function(){
		$(".service_list").css({"display":"none"})
	});
	$(".web").hover(function(){
		$(".web_list").css({"display":"block"})
	},function(){
		$(".web_list").css({"display":"none"})
	});
	$(".dh").has("ul").hover(function(){
		$(this).css({"background":"#fff"})
	},function(){
		$(this).css({"background":"#e3e4e5"})
	});
	$(".dropdown").hover(function(){
		$(".dropdown-up").css({"display":"block"})
	},function(){
		$(".dropdown-up").css({"display":"none"})
	});
	/* 轮播图*/
	var alist = $(".banner_img li");
	var imgHeight = alist[0].offsetHeight;
	//$(".banner_img").get(0).style.height = imgHeight*alist.length + "px";
	var i = 0;
	var timer = setInterval(function(){
			move();
		},1500);
	function move(){
		$('#nums li').each(function() {
			$('#nums li').removeClass('active')
			$('#nums li').eq(i+1).addClass('active')
		})
		i++;
		if(i == alist.length){
			$(".banner_img").get(0).style.top = 0;			
			i = 1;
		}
		if(i == -1){
			$(".banner_img").get(0).style.top = -imgHeight * (alist.length - 1) + "px";
			i = alist.length - 2;
		}
		
		$(".banner_img li").css("opacity","0");
		$(".banner_img li").eq(i).animate({"opacity":100},100);
	};	
	$(".bl_2").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			move();
		},1500);
	});
	$(".next").click(function(){
		move();
	});
	$(".prev").click(function(){
		i-=2;
		move();
	});
	$("#nums li").mouseenter(function(){
		var index = $(this).index();
		i = index-1;	
		move();
	});
	/*秒杀*/
    var to = new Date(2019, 2, 1, 11, 20, 20);

    function antitime() {
    	var now = new Date();
    	var deltaTime = to - now;
    	if(deltaTime <= 0) {
    		//停止计时器
    		window.clearInterval(timer1);
    		//停止执行下面的代码
    		return;
    	}
    	var ss = (deltaTime)/1000;
		var hour = Math.floor(ss/3600);
		var minute = Math.floor(ss/60%60);
		var second = Math.floor(ss%60);
		if(hour<10){
			hour = "0"+hour;
		}
		if(minute<10){
			minute = "0"+minute;
		}
		if(second<10){
			second = "0"+second;
		}
    	$(".cd_hour").html(hour);
    	$(".cd_minute").html(minute);
    	$(".cd_second").html(second);
    }
    var timer1 = setInterval(function(){
    	antitime()
    	}, 500);
    
    
    
    
	//content 轮播
	var alists = $(".slider_item");

	var k = 0;
	function move01(){
		k+=4;
		if(k == 20){
			k = 0;
		}
		if(k<0){
			k=16;
		}
	};
	$(".next1").click(function(){	
		move01();
		$(".slider_wrapper").get(0).style.left = -(199) * k +"px";
		//console.log(-(200) * (k)+"px")
	});
	$(".prev1").click(function(){
		k-=8;
		move01();
		$(".slider_wrapper").get(0).style.left = -(199) * k +"px";
		//console.log(-(200) * (k)+"px")
	})
//	console.log($(".top_wrapper_list").css("left"))
	$(".top_indicators_btn_active").css({
			"color":"#f00"
		});
		
	$(".top_indicators_btn_active").hover(function(){
		$(".top_wrapper_list").animate({"left":"0px"},500);
		
	})
	
	$(".top_indicators_btn_last").hover(function(){
		$(".top_wrapper_list").animate({"left":"-390px"},500);
		
	})
	var alist02 = $(".lunbo02 li");

	var aliWidth = 350;
	var j = 0;
	var timer2 = setInterval(function(){
			move02();
		},1500);
	function move02(){
		j++;
		if(j == alist02.length){
			$(".lunbo02").get(0).style.left = 0;			
			j= 1;
		}
		$(".lunbo02").animate({"left":-aliWidth * j + "px"},100)

	}
	
	
	/*login*/
	
	
	
	
})
