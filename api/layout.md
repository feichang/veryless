# Layout
## makeGrid
* .makeGrid(@colnum: 24, @colwidth: 30px, @margin: 10px);
	* 创建栅格布局
	* 默认950宽 24列 每列30px 间距10px
	* HTML结构:
	* 
```
 <div class="grid">
	<div class="row">
		<div class="span span6"></div>
		<div class="span span6"></div>
		<div class="span span6"></div>
		<div class="span span6"></div>
	</div>
	<div class="row">
		<div class="span span24"></div>
	</div>
 </div>
```

## makeFluid
* .makeFluid(@colnum: 24, @colwidth: 30px, @margin: 10px);	* 创建栅格布局
	* 创建24列 自适应流式布局
	* HTML结构:
	* 
```
 <div class="fluid">
	<div class="row-fluid">
		<div class="span span6 first-child"></div>
		<div class="span span6"></div>
		<div class="span span6"></div>
		<div class="span span6"></div>
	</div>
	<div class="row-fluid">
		<div class="span span8 first-child"></div>
		<div class="span span8"></div>
		<div class="span span8"></div>
	</div>
	<div class="row-fluid">
		<div class="span span12 first-child"></div>
		<div class="span span12"></div>
	</div>
 </div>
```

## makeMetro
* .makeMetro(@colnum: 6, @colwidth: 150px, @margin: 10px);
	* 创建Metro风格布局
	* 默认950宽 6列 每列150px 间距10px
	* HTML结构:
	* 
```
 <div class="metro">
	<div class="row">
		<div class="span span2">
			<div class="row">
				<div class="span span2 line2"></div>
				<div class="span span2 line1"></div>
			</div>
		</div>
		<div class="span span2">
			<div class="row">
				<div class="span span1 line2"></div>
				<div class="span span1">
					<div class="row">
						<div class="span span1 line1"></div>
						<div class="span span1 line1"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="span span2 line1"></div>
			</div>
		</div>
		<div class="span span2">
			<div class="row">
				<div class="span span2 line1"></div>
				<div class="span span2 line2"></div>
			</div>
		</div>
	</div>
</div>
```