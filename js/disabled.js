+function($){
	"use strict";
	$.fn.disable=function(option){
		return this.each(function(){
			if(typeof this.disabled != "undefined"){
				this.disabled = true;
			}
		});
	}
}(jQuery);
