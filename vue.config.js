module.exports = {
    pages: {
        index: {
            entry: "./src/views/index/index.js",
            template: "./src/views/index/index.html",
            filename: "index.html",
            title: "首页"
        },
        articleDetail: {
            entry: "./src/views/articleDetail/articleDetail.js",
            template: "./src/views/articleDetail/articleDetail.html",
            filename: "articleDetail.html",
            title: "文章详情"
        },
        articleList: {
            entry: "./src/views/articleList/articleList.js",
            template: "./src/views/articleList/articleList.html",
            filename: "articleList.html",
            title: "文章列表"
        },
        write: {
            entry: "./src/views/write/write.js",
            template: "./src/views/write/write.html",
            filename: "write.html",
            title: "写文章"
        },
        person: {
            entry: "./src/views/person/person.js",
            template: "./src/views/person/person.html",
            filename: "person.html",
            title: "个人中心"
        },
        auth: {
            entry: "./src/views/auth/auth.js",
            template: "./src/views/auth/auth.html",
            filename: "auth.html",
            title: "认证"
        },
        listTool: {
            entry: "./src/views/listTool/listTool.js",
            template: "./src/views/listTool/listTool.html",
            filename: "listTool.html",
            title: "列表"
        },
        categoryAction: {
            entry: "./src/views/action/categoryAction/categoryAction.js",
            template: "./src/views/action/categoryAction/categoryAction.html",
            filename: "categoryAction.html",
            title: "分类"
        },
        articleAction: {
            entry: "./src/views/action/articleAction/articleAction.js",
            template: "./src/views/action/articleAction/articleAction.html",
            filename: "articleAction.html",
            title: "文章"
        },
        listConfig: {
            entry: "./src/views/config/listConfig.js",
            template: "./src/views/config/listConfig.html",
            filename: "listConfig.html",
            title: "列表配置"
        }
    },
    devServer: {
        proxy: {
            '/silk': {
                target: 'http://139.186.75.156:9004/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/silk': '/silk'  // rewrite path
                }
            },
            '/ius': {
                target: 'http://139.186.75.156:9004/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/ius': '/ius'  // rewrite path
                }
            },
            '/csb': {
                target: 'http://139.186.75.156:9004/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/csb': '/csb'  // rewrite path
                }
            },
        }
    }
}
