# VeryLess 2.0
http://veryless.org

VeryLess是基于LESS的Mixin扩展库,由LESS中国社区( http://lesscss.net/ )发起。<br>
提供一系列方法库。

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
*  Plugin
	
	存放第三方插件，如[css3.less],[animation.less],[brand-color.less]

可以看出VeryLess提供了一系列方法，帮助我们快速敏捷的编写样式。不久后将会提供一套漂亮的UI。
同时VeryLess提供Plugin概念，任何人都可以利用Veryless创建属于自己的plugin。

## 如何开发Plugin

	1, Fork veryless  https://github.com/feichang/veryless
	2, 将自己的Plugin提交到fork到个人Github上的veryless中plugins文件夹中
	3, Pull request
	4, 审核通过后，用户可以通过 veryless -use pluginname path 的方式使用

## 作者

* 飞长
	* 微博：@非常长
	* http://veryued.org

## 贡献者

* 飞长
* TooBug
* fengdi
* 石霸
