function MainMenu(renderer){
	var _this = this;
	var _scene = new THREE.Scene();
	var _camera = new THREE.PerspectiveCamera();
	var _renderer = renderer || new THREE.WebGLRenderer();


	camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,4000);
	camera.position.set(0,0,0);
	controls = new THREE.DeviceOrientationControls(camera);


	_this.onWindowResize = function(){
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();	
	}

	_this.render = function(){
		_renderer.render(_scene,_camera);
	}
}