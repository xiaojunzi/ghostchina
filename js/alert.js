//声明立即调用函数
+function($){
	"use strict";//严格模式
	
	//2.插件类及原型方法的定义
	
//	定义选择器,所有符合该自定义属性的元素都可以触发下面的事件
	var dismiss='[data-dismiss="alert"]';
	var Alert=function(el){
		$(el).on('click', dismiss, this.close);
	}
	
	//在原型上定义close方法
	Alert.prototype.close = function (e) {
	
    // 关闭警告框的主要代码设置,每一行代码的细节注释,请参考5.8节
    $(this).parent().hide();

}
	//在jquery的fn上面定义插件
	
	var old=$.fn.alert;//保留其他插件的$.fn.alert代码（如果定义），做防冲突处理
	$.fn.alert=function(option){//option为初始化参数，为用户传进去的参数，可以覆盖原先的_default默认值，不带的话直接使用默认值
		this.each(function(){
			   // 根据选择器,遍历所有符合规则的元素,然后在元素上绑定插件的实例,以监控用户的事件行为
			var elem=new Alert(this);
			//options的处理
		});
		return this;
	}
	
	$.fn.alert.Constructor = Alert;// 并重设插件构造器,可以通过该属性获取插件的真实类函数（主要用来暴露给外部使用）
	
	
	//防冲突处理（一般自己不写重名可以不用）

	 $.fn.alert.noConflict = function () {
	
	     $.fn.alert = old  // 恢复以前的旧代码
	
	     return this       // 将$.fn.alert.noConflict()设置为Bootstrap的alert插件
	
	}
}(jQuery);//因为插件有多种，使用jQuery的话是表示使用jquery来扩展插件
