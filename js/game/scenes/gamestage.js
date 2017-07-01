function GameStage(renderer){
	var _this = this;
	var _scene = new THREE.Scene();
	var _camera = new THREE.PerspectiveCamera();
	var _renderer = renderer || new THREE.WebGLRenderer();

	_camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,4000);
	_camera.position.set(100,100,100);
	_camera.up = new THREE.Vector3(0,0,1);
	_camera.lookAt(new THREE.Vector3(0,0,0));

	var _controls = new THREE.DeviceOrientationControls(_camera);

	var _sky = new Skybox();
	_scene.add(_sky.mesh);

	_this.onWindowResize = function(){
		_camera.aspect = window.innerWidth / window.innerHeight;
		_camera.updateProjectionMatrix();	
	}

	_this.render = function(){
		_controls.update();
		_renderer.render(_scene,_camera);
	}

}