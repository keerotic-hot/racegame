function MainMenu(renderer){
	var _this = this;
	var _scene = new THREE.Scene();
	var _camera = new THREE.PerspectiveCamera();
	var _renderer = renderer || new THREE.WebGLRenderer();


	_camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,4000);
	_camera.position.set(100,100,100);
	_camera.up = new THREE.Vector3(0,0,1);
	_camera.lookAt(new THREE.Vector3(0,0,0));
	//controls = new THREE.DeviceOrientationControls(_camera);

	var geo = new THREE.BoxGeometry(10,10,10,1,1,1);
	var mat = new THREE.MeshBasicMaterial({color:0xffff00,wireframe: true });
	var mesh = new THREE.Mesh(geo,mat);
	_scene.add(mesh);


	_this.onWindowResize = function(){
		_camera.aspect = window.innerWidth / window.innerHeight;
		_camera.updateProjectionMatrix();	
	}

	_this.render = function(){
		mesh.rotateX(Math.PI/180);
		mesh.rotateY(2*Math.PI/180);
		_renderer.render(_scene,_camera);
	}
}