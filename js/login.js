$(function(){
	$("#btn").on("click", function() {

	$.post("http://47.104.244.134:8080/userlogin.do", {
		"name": $("#loginname").val(),
		"password": $("#nloginpwd").val(),
	
	}, function(data) {
		console.log(data)
		if(data["code"]==0){
			alert("登录成功")
			/*document.cookie = "a=token";*/
			$.cookie('token', data["data"]["token"], { expires: 7 });
			console.log(data);
		};
		if(data["code"]==1){
			alert("登录失败")
		};

	})
	
	})
})