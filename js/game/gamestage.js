function GameStage(renderer){
	var _this = this;
	var _scene = new THREE.Scene();
	var _camera = new THREE.PerspectiveCamera();
	var _renderer = renderer || new THREE.WebGLRenderer();

	_this.onWindowResize = function(){
		_camera.aspect = window.innerWidth / window.innerHeight;
		_camera.updateProjectionMatrix();	
	}

	_this.render = function(){
		_renderer.render(_scene,_camera);
	}

}