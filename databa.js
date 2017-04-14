var MyMongo = function (){
	//引入模块
	var mongoose = require('mongoose');
	//连接数据库
	var db = mongoose.createConnection('mongodb://localhost/test');
	//  创建模型
	var Schema = mongoose.Schema;
	
	//设置数据类型
		//  定义了一个新的模型，但是此模式还未和users集合有关联
		//exports.user = db.model('users', userScheMa); //  与users集合关联
	var userScheMa = new Schema({
		name: String,
		password: String
	}); 
	//选择集合
	var user = db.model('user', userScheMa);
	
	/*==========================功能部分===============================*/
	//添加用户
	this.addUser = function(userName,passWord,fn){
		//数据集
		var content = {name: userName,password: passWord}
		//实例化对象 并插入数据
		var useradd = new user(content);
		//保存数据库
		useradd.save(function(err,res) {
		    if (err) {
		        console.log('添加失败');
		    }else{
		    	console.log('添加成功');
		    	fn(res)
		    }
		    //db.close();
		});
	};
	this.deleUser = function(userName,fn){
		//要删除的条件
		var del = {name:userName};
		user.remove(del,function(err,res){
			if(err){
				console.log('删除失败');
			}else{
				console.log('删除成功');
				fn(res)
			}
			//db.close();
		});
	};
	this.alterUser = function(passWord,newPassword,fn){
		//原数据字段值
		var passWord = {password:passWord};
		//条件更新
		var newPassword = {$set:{password:newPassword}}
		user.update(passWord,newPassword,function(err,res){
			if(err){
				console.log('更新失败');
			}else{
				console.log('更新成功');
				fn(res)
			}
			//db.close();
		});
	};
	this.searchUser = function(userName,fn){
		var content = {name:userName};
		var field = {name:1,password:1};
		user.find(content,field,function(err,res){
			if(err){
				console.log('没有这个用户');
			}else{
				console.log(res);
				fn(res);
			}
			//db.close();
		});
		
	};
	this.watchAll = function(fn){
		var field = {name:1,password:1};
		user.find({name: {$exists: true}},function(err,res){
			if(err){
				console.log('没有这个用户');
			}else{
				console.log(res);
				fn(res);
			}
			//db.close();
		});
		
	}
};
module.exports = MyMongo;