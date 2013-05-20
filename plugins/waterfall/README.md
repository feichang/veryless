
 Waterfall layout plugin  
-------------------------
 基于LESS的瀑布流布局方法

--------------------------

##makeWaterfall
* .makeWaterfall(@containerWidth: 960px, @column: 3,@columnMargin: 10px);
	* 创建瀑布流布局
	* 默认950宽 3列 间距10px
	* 配置的Column的值要与.row-fall的数量相等
	* HTML结构:
```
 <div class="fall">
	<div class="row-fall first-column">
		<div class="span"></div>
		<div class="span"></div>
		<div class="span"></div>
		<div class="span"></div>
	</div>
	<div class="row-fall">
		<div class="span"></div>
	</div>
	<div class="row-fall">
		<div class="span"></div>
	</div>
 </div>
```
	