var angular = require('angular');
var model = require('../model/model.js');

angular.module('app',[]).controller('app_ctrl',function($scope,$http){
	$scope.watchUser = function(){
		model.watchUser($http,function(data){
			$scope.watchRes = data;
		})		
	};
	$scope.addUser = function(){
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var _data = "userName="+username+"&passWord="+password;
		model.addUser($http,_data,function(data){
			alert('新增'+data.name+'成功')
		})
	};
	$scope.deleUser = function(){
		var username = document.getElementById("username").value;
		var _data = "userName="+username;
		model.deleUser($http,_data,function(data){
			alert('删除成功')
		})
	};
	$scope.alterUser = function(){
		//var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var newPass = document.getElementById("Newpassword").value;
		var _data = "oldValue="+password+"&newData="+newPass;
		model.alterUser($http,_data,function(data){
			//alert('修改密码成功");
		})
	};
	$scope.searchUser = function(){
		var username = document.getElementById("username").value;
		var _data = "userName="+username;
		model.searchUser($http,_data,function(data){
			//console.log('用户名：'+data.name+"密码："+data.password);
		})
	};
});
