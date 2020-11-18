1. webpack工作原理

    核心：entry, chunk, loader, plugin
    流程：config、plugin、entry、loader、chunk
    plugins: HMR, ProvidePlugin, CommonsChunkPlugin, ExtractTextWebpackPlugin, UglifyJsPlugin

2. 常见loader（解析非js文件）
    1. babel-loader, css-loader, eslint-loader
3. 常见plugins（扩展webpack功能，监听webpack生命周期事件）
    define-plugin定义环境变量。common-chunk, uglifyis压缩代码

4. HMR
    原理：
    1. watch监听文件变化，重新打包保存内存（webpack-dev-middleware)
    2. devserver通知浏览器文件发生变化（建立websocket长连接，新模块hash值发送给浏览器）
    3. devserver Client端根据hash，进行reload（刷新或者热更新）
    4. webpack接收最新hash值，请求代码
    5. HMR.runtime热更新
    6. accept方法，添加更新后处理函数
    6. 输出资源
    7. 输出完成

5. webpack打包原理
    1. 解析入口文件（babel/parser) -> AST语法树Abstract Syntax Tree
        ast = babel/parser.parse(file.readFileSync(file));
    2. 找出所有依赖包(babel/traverse)
        treverse(ast, ImportDeclaration() {deps[node.source.value] = absPath})
    3. AST -> es5 code (bebel/core, preset-env)
        code = babel.transformFromAst(ast, null, {presets: [preset-env]})
    4. 递归依赖项，生成依赖图
        for(getModuleInof(file)) => depsGraph[file] = {deps, code}
    5. 重写require，输出bundle
        bundle:1. 入口文件开始执行。 2. 利用eval执行代码。 3. 依赖对象寻址映射，获取exports对象
        ```js
        return `(function(graph){
                function require(file) {
                    var exports = {};
                    function absRequire(relPath){
                        return require(graph[file].deps[relPath])
                    }
                    (function(require, exports, code){
                        eval(code)
                    })(absRequire, exports, graph[file].code)
                    return exports
                }
                require('${file}')
        })(${depsGraph})`
        ```

6. 手写loader
loader就是函数，会在加载文件时执行。利用loader-utils获取参数
```js
const loaderUtils = require('loader-utils')
module.exports = function (source) {
 const options = loaderUtils.getOptions(this)
 const asyncfunc = this.async()
 setTimeout(() => {
  source += '。。。'
  asyncfunc(null, res)
 }, 200)
}
```

7. 实现plugin
webpack生命周期内，扩展内容. 一般类实现，定义apply方法，使用参数compiler.hooks操作生命周期
```js
class DemoWebpackPlugin {
 constructor () {
  console.log('plugin init')
 }
 apply (compiler) {
     compiler.hooks.compile.tap('DemoWebpackPlugin', compilation => )
     compiler.hooks.emit.tapAsync
 }
}
 
module.exports = DemoWebpackPlugin
```