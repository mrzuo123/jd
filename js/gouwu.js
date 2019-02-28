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
	
	$(".fore1").hover(function(){
		$(".lists").css({"display":"block"})
	},function(){
		$(".lists").css({"display":"none"})
	});

var url = 'http://47.104.244.134:8080/cartlist.do';
var obj = JSON.parse(getCookie('token'))
//var oList = document.getElementsByClassName('oList');
console.log(obj)
$.get(url, {token:obj[0]},function (res) {
       console.log(res);
       // console.log(token)
       var str = ""
      for(var i = 0 ;i<res.length;i++){
        
       // str+="<p>+res[i].goods.name+</p>"
       str += "<li><p class='sp_id'><input type='checkbox' class='whole'><b>" + res[i].id + "</b></p><img src='" + res[i].goods.picurl + "'><span class='C-gid'>" + res[i].gid + "</span><p class='C-mz'>" + '&nbsp' + res[i].goods.name + "</p><span class='C-jg'>" + res[i].goods.price + "</span><span class='jia'>" + '+' + "</span><span class='C-sl'>" + res[i].count + "</span><span class='jian'>" + '-' + "</span><span class='C-sum'>" + res[i].goods.price * res[i].count + "</span><span class='del' >" + '&nbsp' + '删除' + "</span></li>"
        
}

    

	
})