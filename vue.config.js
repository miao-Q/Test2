module.exports ={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{       //target下所有接口都可被api代理
                target:"https://www.imooc.com",
                changeOrigin:true,
                pathRewrite:{
                    '/api':  ''
                }
            }
            // '/activity':{      //拦截到该接口，进行代理
            //     target:"https://www.imooc.com/",
            //     changeOrigin:true,
            //     pathRewrite:{
            //         '/activity':  '/activity'
            //     }
        }
    }
}