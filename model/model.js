var Model = (function(){
	var web_service = {
		add:'http://127.0.0.1:3000/add',
		dele:'http://127.0.0.1:3000/dele',
		alter:'http://127.0.0.1:3000/alter',
		search:'http://127.0.0.1:3000/search',
		watch:'http://127.0.0.1:3000/watch'
	};
	
	var config={headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}; 
	
	var watch = function($http,fn){
		$http.get(web_service.watch).success(function(response){
			fn(response);
		})
	};
	var add = function($http,_data,fn){
		$http.post(web_service.add,_data,config).success(function(reponse){
			console.log(reponse)
			fn(reponse);
		})
	};
	var dele = function($http,_data,fn){
		$http.post(web_service.dele,_data,config).success(function(reponse){
			console.log(reponse)
			fn(reponse);
		})
	};
	var alter = function($http,_data,fn){
		$http.post(web_service.alter,_data,config).success(function(reponse){
			console.log(reponse)
			fn(reponse);
		})
	};
	var search = function($http,_data,fn){
		$http.post(web_service.search,_data,config).success(function(reponse){
			console.log(reponse)
			fn(reponse);
		})
	};
	return {
		watchUser:watch,
		addUser:add,
		deleUser:dele,
		alterUser:alter,
		searchUser:search
	};
})()

module.exports = Model;