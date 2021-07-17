module.exports = {
    publicPath: "/",
    outputDir: "dist",

    //开发环境服务配置
    devServer: {
        //在DevServer第一次构建完成时，是否自动打开浏览器
        open: true,
        port: 9090
            //代理信息
            // proxy: {
            //     //匹配的路径
            //     '/api': {
            //         //代理的路径
            //         target: 'http://localhost:8081',
            //         //是否开启跨域
            //         // changeOrigin:true,
            //         //路径重写
            //         pathRewrite: {
            //             '^/api': ''
            //         }
            //     },
            //     '/serve': {
            //         //代理的路径
            //         target: 'http://localhost:8089',
            //         //是否开启跨域
            //         changeOrigin: true,
            //         //路径重写
            //         pathRewrite: {
            //             '^/serve': '/serves'
            //         }
            //     }
            // }
    }
}