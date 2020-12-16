const apis = ['/rest/*']
let config = {}

for (let i in apis) {
	config[apis[i]] = {
		target: 'http://www.meetmeal.us',
		changeOrigin: true,
	}
}
console.log(config)
module.exports = {
	publicPath: '',
	devServer: {
		proxy: {
			...config,
			// '/admin/Login/login':{
			// 	target: 'http://42.56.89.212:8050',
			// 	changeOrigin: true,
			// },
			// '/admin/School/schoolList':{
			// 	target: 'http://42.56.89.212:8050',
			// 	changeOrigin: true,
				
			// 	onProxyRes: function(proxyRes, req, res) {
			// 		var cookies = proxyRes.headers['set-cookie'];
			// 		var cookieRegex = /Path=\/XXX\//i;
			// 		//修改cookie Path
			// 		if (cookies) {
			// 			var newCookie = cookies.map(function(cookie) {
			// 			  if (cookieRegex.test(cookie)) {
			// 				return cookie.replace(cookieRegex, 'Path=/');
			// 			  }
			// 			  return cookie;
			// 			});
			// 		}
			// 		//修改cookie path
			// 		delete proxyRes.headers['set-cookie'];
			// 		proxyRes.headers['set-cookie'] = newCookie;
			// 	}
			// }
		}
	},
	configureWebpack: {
	    performance: {
	    	hints:'warning',
	    	//入口起点的最大体积
	    	maxEntrypointSize: 50000000,
	    	//生成文件的最大体积
	    	maxAssetSize: 30000000,
	    	//只给出 js 文件的性能提示
	    	assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js');
	    	}
	    }
	}
}

