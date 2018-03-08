/*以下为vue-cli的README*/
# take-out

> a take-out project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


/*以下为个人的README*/
## cmd
```
	cnpm install -g vue-cli
```
## 项目的根目录
```
	vue init <tempalte-name> <project-name>
	cd <project-name>
	cnpm install
	cnpm run dev
```
## 浏览器
```
	localhost:8080
```
## 项目介绍
```
	/build  &  /config		//webpack配置相关
	/node_modules		//npm install 安装的依赖代码库
	/src		//存放项目源码
	/static		//存放第三方静态资源
	.babelrc		//babel配置
```

## 开发时用的依赖或插件
```
	cnpm install --save-dev stylus
	cnpm install --save-dev stylus-loader
	cnpm install --save vue-router
	cnpm install --save vue-resource	//处理请求和响应
	cnpm install --save better-scroll	//扩展iscroll
```
## 注意事项
```
	预览图在/preview
	vue-loader 依赖了 postcss 工具，搞定css兼容性问题（flex等）
	flex弹性布局
	移动端1px边框实现
	css sticky footer布局
```

/*log*/
* 2017年3月4日开始开发
* 2017年3月6日完成基本架构和header组件的开发
* 2017年3月8日完成goods组件左侧menu、右侧食品表布局、shopcart组件的开发
* 2017年3月9日完成cartcontrol组件和食品选择数据绑定的开发

