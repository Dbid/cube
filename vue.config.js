const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings 


function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    //向CSS相关的loader传递选项
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  //传递任何第三方插件选项的对象
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer:{
    before(app){
      app.get('/api/seller',function(req,res){
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/api/goods',function(req,res){
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings',function(req,res){
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  //接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack(config){
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
  }
}
