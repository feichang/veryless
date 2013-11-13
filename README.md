# VeryLess 2.0
http://veryless.org

VeryLess是基于LESS的Mixin扩展库,由LESS中国社区( http://lesscss.net/ )发起。<br>
提供一系列方法库，帮助我们快速敏捷的编写样式。

## 使用方法
	
安装veryless
	
	npm install -g veryless

Usage:

	初始化目录:
	    veryless -init ./myfolder
	下载Plugin:
	    cd ./myfolder
	    veryless -use pluginname
	就会下载对应的插件到 ./myfolder/veryless/pulgins/里

举个栗子：

	我的项目目录：/mysite
	我的前端资源文件：/mysite/assets
	我想把veryless放到 /mysite/assets/lib/ 里面
	sudo npm install -g veryless
	cd /mysite/assets/
	# 初始化 目录
	veryless -init lib
	# 下载Plugin css3
	cd lib
	veryless -use css3

或者可以直接下载veryless.less到本地使用: https://github.com/feichang/veryless/blob/master/veryless.less

## API文档

https://github.com/feichang/veryless/tree/master/api

## 分层说明

*  Base        

	提供全局Reset和一些Reset方法，比如reset字体颜色、大小等等
*  Compatible

	提供常用浏览器兼容解决方案，如png24透明的问题，比如fixed定位问题
*  Util

	提供常用的工具方法，能够加快开发速度，如清楚浮动clearfix, 如Retina屏幕高清图片支持等
*  Layout

	提供常用的布局方法，目前有绝对栅格布局，流式布局，Metro风格布局

*  Shortcut

	提供常用的快捷写法，如font-size: 12px; 可以写成： .font-s12;或者 .font-s(12px);

## Plugin介绍

VeryLess提供了Plugin概念，任何人都可以利用Veryless创建属于自己的plugin&使用plugin。

## 如何开发Plugin

1, 开发好插件存到github上，目录规范请看下面

2, 到这里 https://github.com/feichang/veryless/issues?state=open 新建一个issue，命名规范：［添加插件］插件名
   内容填写如下：
   * 插件名字（英文）
   * 描述：插件简要描述
   * 文档地址：插件的文档地址
   * 插件url: 如 https://raw.github.com/feichang/veryless/master/plugins/css3/index.less
   * 微博：你的微博名称 如 @非常长
   * blog: 你的博客地址，如果有请填写
   * github: 你的github地址，如果有请填写

3，我看到issue后会更新根目录中的plugins.json 用户就可以像这样使用你的插件了 veryless -use yourpluginname

## Plugin规范

	/YourPluginName
	    - index.less 这里存放plugin的所有代码（必须）
	    - README.md  介绍你的plugin (必须)
	    - 其他文件 (可选)

## 作者

* 飞长
	* 微博：@非常长
	* http://veryued.org

* TooBug
    * 微博：@Toobug
    * http://www.toobug.net/

## Plugin 列表 & 她的作者们

### CSS3

* 描述：提供一些CSS3快捷方式
* 文档地址：https://github.com/feichang/veryless/tree/master/plugins/css3
* 作者：飞长
* 微博：@非常长
* blog: http://veryued.org
* github: https://github.com/feichang

### Animation

* 描述：提供一些Animation的方法
* 文档地址：https://github.com/feichang/veryless/tree/master/plugins/animation
* 微博：@非常长
* blog: http://veryued.org
* github: https://github.com/feichang

### BrandColor

* 描述：提供各大公司的标准颜色
* 文档地址：http://veryless.org/veryless/test/ui/color/color.html
* 微博：@非常长
* blog: http://veryued.org
* github: https://github.com/feichang

### Waterflow

* 描述：瀑布流布局
* 文档地址：https://github.com/feichang/veryless/tree/master/plugins/waterfall
* 作者：moe
* 微博：@刘剑锋_moe
* blog: www.moejser.com
* github: https://github.com/fengliu222
