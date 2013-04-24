# CSS3

## background
* .background-clip;
  * 背景覆盖的位置
  * 可选参数 [ border-box || padding-box || content-box]
  * 默认参数 border-box

* .background-origin;
  * 背景开始的位置
  * 可选参数 [padding-box | border-box | content-box]
  * 默认参数 padding-box

* .background-size;
  * 背景尺寸
  * 参数 [[ < length> | < percentage> | auto ]{1,2} | cover | contain ]#
  * 默认参数 auto;

## border-radius
* .border-radius;
	* 圆角默认参数都为5px，也可以.border-radius(10px);
* .border-top-left-radius;
	* 左上圆角
* .border-top-right-radius;
	* 右上圆角
* .border-bottom-right-radius;
	* 右下圆角
* .border-bottom-left-radius;
	* 左下圆角
* .border-top-radius;
	* 上边圆角
* .border-right-radius;
 	* 右边圆角
* .border-bottom-radius;
	* 下边圆角
* .border-left-radius;
	* 左边圆角

## box-shadow
* box-shadow;
	* box阴影
	* 参数：none | [内映射? && [横向平移 纵向平移 模糊? 扩散? 颜色?]]#
	* 默认参数：5px 5px 10px #cccccc

## box-sizing
* box-sizing;
	* 盒子模型计算方式
	* 参数 content-box padding-box border-box
	* 默认参数 content-box

## opacity
* opacity
	* 透明
	* 默认参数 80 透明度80

## resize
* resize
	* 支持缩放
	* 参数 horizontal, vertical, both
	* 默认参数 both

## text-shadow
* text-shadow
	* 字体阴影 支持多重阴影
	* 默认参数 5px 5px 5px #333

## transform
* .rotate(@degress: 0deg); 
	* 旋转
* .rotate3d(@x: 0, @y: 0, @z: 0, @degress: 0deg);
* .rotateX(@degress: 0deg);
* .rotateY(@degress: 0deg);
* .rotateZ(@degress: 0deg);
* .scale(@x:0, @y:0);
	* 缩放
* .scaleX(@x: 0);
* .scaleY(@y: 0);
* .translate(@x: 0px, @y: 0px);
	* 重定位元素
* .translate3d(@x: 0px, @y: 0px, @z: 0px);
* .translateX(@x: 0px);
* .translateY(@y: 0px);
* .translateZ(@z: 0px);
* .skew(@x: 0deg, @y: 0deg);
	* 倾斜
* .skewX(@x: 0deg);
* .skewY(@y: 0deg);

## transition

* .transition(@transition);
	* 变换
	* 无默认参数
* .transition-delay(@transition-delay: 0s);
	* 变换延迟时间
* .transition-duration(@transition-duration: 0s);
	* 变换持续时间
* .transition-property(@transition-property);
	* 需要变换的属性
	* 无默认参数
	
* .transition-timing-function(@transition-timing: ease);
	* 动画时间函数
	* [ ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end |         steps(< integer>[, [ start | end ] ]?) | cubic-bezier(< number>, < number>, < number>, < number>) ] [, [ ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(< number>[, [ start | end ] ]?) | cubic-bezier(< number>, < number>, < number>, < number>) ] ]*