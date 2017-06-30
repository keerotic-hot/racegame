var Time = new (function(){
	var _this = this;
	var _last = Date.now();
	
	_this.update = function(){
		var now = Date.now();
		_this.deltaTime = (now-_last)/1000;
		_last = now;
	}

	_this.update();
})();
