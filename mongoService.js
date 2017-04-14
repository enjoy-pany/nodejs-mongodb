var http=require('http');
var url=require('url');//将我们目前请求过来的路径由字符串转换成对象的模块
var qs = require('querystring');//字符串转换成对象的模块
var mongo = require('./databa.js');
http.createServer(function(request,response){
	response.writeHead('200',{'Content-Type':'application/json;charset=utf-8','access-control-allow-origin':'*'});
    var requestUrl=request.url; //login?username=liming
    var _url=url.parse(requestUrl).pathname;
    switch(_url){
    	case "/add":
    	console.log("正在添加用户方法");
    	var _data = "";//定义一个空字符串 用来接收post发过来的数据
    	//当数据传进来的时候
    	request.addListener('data',function(data){
    		_data+=data;
    	});
    	//在监听结束的时候
    	request.addListener('end',function(){
    		var qs = require('querystring');//字符串转换成对象的模块
    		var qsData = qs.parse(_data);
    		var _mongo = new mongo(); 
    		_mongo.addUser(qsData.userName,qsData.passWord,function(value){
    			console.log(value)
	    		response.write(JSON.stringify(value));
	    		response.end();
    		});
    	});
    	break;
    	    	
    	case "/dele":
    	console.log("正在调用删除用户方法");
    	var _data = "";
    	request.addListener('data',function(data){
    		_data+=data;
    	});
    	//在监听结束的时候
    	request.addListener('end',function(){
    		var qs = require('querystring');//字符串转换成对象的模块
    		var qsData = qs.parse(_data);
    		var _mongo = new mongo(); 
    		_mongo.deleUser(qsData.userName,function(value){
    			console.log(value)
	    		response.write(JSON.stringify(value));
	    		response.end();
    		});
    	});
    	break;
    	
    	case "/alter":
    	console.log("正在调用修改方法");
    	var _data = "";
    	request.addListener('data',function(data){
    		_data+=data;
    	});
    	//在监听结束的时候
    	request.addListener('end',function(){
    		var qs = require('querystring');//字符串转换成对象的模块
    		var qsData = qs.parse(_data);
    		var _mongo = new mongo(); 
    		_mongo.alterUser(qsData.oldValue,qsData.newData,function(value){    			
	    		response.write(JSON.stringify(value));
	    		response.end();
    		});
    	});
    	break;
    	
    	case "/search":
    	console.log("正在调用服务端搜索用户方法");
    	var _data = "";
    	request.addListener('data',function(data){
    		_data+=data;
    	});
    	//在监听结束的时候
    	request.addListener('end',function(){
    		var qs = require('querystring');//字符串转换成对象的模块
    		var qsDataJsons = qs.parse(_data);
    		var _mongo = new mongo(); 
    		_mongo.searchUser(qsDataJsons.userName,function(value){
    			console.log('*******');
    			console.log(value);
	    		response.write(JSON.stringify(value));
	    		response.end();
    		});
    	});
    	break;
    	
    	case "/watch":
    	console.log("正在查询所有方法");
		var _mongo = new mongo(); 
		_mongo.watchAll(function(value){
			console.log('*******');
			console.log(value);
    		response.write(JSON.stringify(value));
    		response.end();
		});
    	break;
    	
        case "/favicon.ico":
		break;
    };
   
}).listen(3000);
console.log("my server started port is&&&&&&3000");
