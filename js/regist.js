$(function() {
	var oTxt = document.getElementById("txt");
			var oTxt1 = document.getElementById("txt1");
			var oTxt2 = document.getElementById("txt2");
			var oTxt3 = document.getElementById("txt3");
			var oTxt4 = document.getElementById("txt4");
			var oPan1 = document.getElementById("span1");
			var oPan2 = document.getElementById("span2");
			var oPan3 = document.getElementById("span3");
			var oBox = document.getElementById("box");
			
			window.onload = function(){
				var str = "";
				while(str.length<4){
					var charCode = Math.floor(Math.random()*74+48);
					if(charCode>=48 && charCode<=57 || charCode>=65 && charCode<=75 ||charCode>=97 && charCode<=107){
						var char = String.fromCharCode(charCode);
						str += char;
					}
				}
				box.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
				oBox.value = str;
				oBox.style.cursor = "pointer";
			}
			
			oTxt.onchange = function(){
				var val = this.value;
				var reg = /^[a-zA-Z_]\w{5,14}$/;
				if(reg.test(val)){
					oPan1.innerHTML = "格式正确";
				}else{
					oPan1.innerHTML = "用户名由6-15位数字字母组合";
				}
			}
			
			oTxt1.onchange = function(){
				 val1 = this.value;
				var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/;
				if(reg.test(val1)){
					oPan2.innerHTML = "格式正确";
				}else{
					oPan2.innerHTML = "密码由8-18位数字字母组合";
				}
			}
			oTxt2.onchange = function(){
				var val2 = this.value;
				if(val2==val1){
					oPan3.innerHTML = "密码正确";
				}else{
					oPan3.innerHTML = "两次密码不一致,请重新输入";
				}
			}
			oTxt3.onchange = function(){
				var val4 = this.value;
				var reg = /^\w+@\w+(\.\w+)+$/;
				if(reg.test(val4)){
					oPan2.innerHTML = "格式正确";
				}else{
					oPan2.innerHTML = "密码由8-18位数字字母组合";
				}
			}
			oBox.onclick = function(){
				var str = "";
				while(str.length<4){
					var charCode = Math.floor(Math.random()*74+48);
					if(charCode>=48 && charCode<=57 || charCode>=65 && charCode<=75 ||charCode>=97 && charCode<=107){
						var char = String.fromCharCode(charCode);
						str += char;
					}
				}
				var getColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
				box.style.backgroundColor = "red";
				oBox.value = str;
				oBox.style.cursor = "pointer";	
			}
	
	
	
	
	
	var a = true;
	$("#btn").on("click", function() {
		$.get(
			"http://47.104.244.134:8080/username.do", {
				"username": $("#txt").val()
			},
			function(data) {
				if(data["code"] == 0) {
					alert("用户名已存在")
					a = false;
				}

			});
		if(a == true) {
			$.post("http://47.104.244.134:8080/usersave.do", {
				"username": $("#txt").val(),
				"password": $("#txt1").val(),
				"email": $("#txt4").val(),
				"sex": "男"
			})
		}
		
	})

})