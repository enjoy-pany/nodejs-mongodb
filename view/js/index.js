$(function(){
	$("#addBtn").click(function(){
		var $username = $("#username").val();
		var $password = $("#password").val();
		var login_service = "http://127.0.0.1:3000/add";
		var jsons = {"userName":$username,"passWord":$password};
		$.post(login_service,jsons,function(data){
			console.log(data);
		});				
	});
	$("#searchBtn").click(function(){
		var $username = $("#username").val();
		var login_service = "http://127.0.0.1:3000/search";
		var jsons = {"userName":$username};
		$.post(login_service,jsons,function(data){
			console.log(data);
		});				
	});
	$("#deleBtn").click(function(){
		var $username = $("#username").val();
		var login_service = "http://127.0.0.1:3000/dele";
		var jsons = {"userName":$username};
		$.post(login_service,jsons,function(data){
			console.log(data);
		});				
	});
	$("#alterBtn").click(function(){
		var $oldValue = $("#password").val();
		var $newData = $("#Newpassword").val();
		var login_service = "http://127.0.0.1:3000/alter";
		var jsons = {"oldValue":$oldValue,"newData":$newData};
		$.post(login_service,jsons,function(data){
			console.log(data);
		});				
	});
	$("#loadBtn").click(function(){
		var login_service = "http://127.0.0.1:3000/watch";
		$.post(login_service,function(data){
			console.log(data);
			var str = "";
			for(var i=0;i<data.length;i++){
				str+='<tr><td>'+data[i]._id+'</td><td>'+data[i].name+'</td><td>'+data[i].password+'</td></tr>'
			}
			$('.table-striped').append(str);
		});				
	});
});