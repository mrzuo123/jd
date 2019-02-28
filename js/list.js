$(function() {
			$("#city").hover(function() {
				$(".china_city_list").css({
					"display": "block"
				})
			}, function() {
				$(".china_city_list").css({
					"display": "none"
				})
			});
			$(".ttbar_myjd").hover(function() {
				$(".myjd_list").css({
					"display": "block"
				})
			}, function() {
				$(".myjd_list").css({
					"display": "none"
				})
			});
			$(".company").hover(function() {
				$(".company_list").css({
					"display": "block"
				})
			}, function() {
				$(".company_list").css({
					"display": "none"
				})
			});
			$(".service").hover(function() {
				$(".service_list").css({
					"display": "block"
				})
			}, function() {
				$(".service_list").css({
					"display": "none"
				})
			});
			$(".web").hover(function() {
				$(".web_list").css({
					"display": "block"
				})
			}, function() {
				$(".web_list").css({
					"display": "none"
				})
			});
			$(".dh").has("ul").hover(function() {
				$(this).css({
					"background": "#fff"
				})
			}, function() {
				$(this).css({
					"background": "#e3e4e5"
				})
			});
			$(".dropdown").hover(function() {
				$(".dropdown-up").css({
					"display": "block"
				})
			}, function() {
				$(".dropdown-up").css({
					"display": "none"
				})
			});
			
					
			
			

			var url = "http://47.104.244.134:8080/goodsbytid.do";
			$.get(url, {
				tid: 13,
				page: 1,
				limit: 99
			}, function(res) {
				console.log(res);
				var str = "";
			
				for(var i = 1; i < res.data.length; i++) {
					str += "<li class='pro-list' data-id='" + res.data[i].id + "'><a href='Details page.html?id=" + res.data[i].id + "'><img class='pro-list-pic' src='" + res.data[i].picurl + "'/><p class='pro-name-box'>" + res.data[i].name + "</p><p class='price-box'>$" + res.data[i].price + "</p></a><input type='button' id='buy' value='添加购物车' ></li>";
			
				}
				$("#gl-warp").html(str);
			})
			
			console.log($.cookie("token"))
			
			$("#buy").click(function() {
				//				url = "http://47.104.244.134:8080/cartsave.do";
				$.get("http://47.104.244.134:8080/cartsave.do", {
						gid: $(this).parent().attr("data-id"),
						token: $.cookie("token")
					},
					function(res) {
						console.log(res)
					})
			
			})
			
			
			

})