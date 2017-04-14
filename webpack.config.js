module.exports={
	entry:'./controller/controller.js',
	output:{
		path:'./view/js',//输出路径
		filename:'app.min.js'//输出名字
	},
	//配置使用什么loader来处理我们引入入口文件
	/*module:{
		//定义使用哪种loader---jsx-loader,css-loader,style-loader,coffee-loader,script-loader
		loaders:[
		   {test: /\.js$/,loader:"jsx-loader"}
		]
	}*/
	
}