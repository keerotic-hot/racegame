function MainMenu(renderer){
	var _this = this;
	var _scene = new THREE.Scene();
	var _camera = new THREE.PerspectiveCamera();
	var _renderer = renderer || new THREE.WebGLRenderer();


	var mixers = [];		


	_camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,4000);
	_camera.position.set(100,100,100);
	_camera.up = new THREE.Vector3(0,0,1);
	_camera.lookAt(new THREE.Vector3(0,0,0));
	//controls = new THREE.DeviceOrientationControls(_camera);

	var geo = new THREE.BoxBufferGeometry(10,10,10,1,1,1);
	var mat = new THREE.MeshPhongMaterial({color:0xffff00,wireframe: false });
	var mesh = new THREE.Mesh(geo,mat);
	_scene.add(mesh);

	var light = new THREE.PointLight();
	light.position.set(100,100,50);
	_scene.add(light);

	var manager = new THREE.LoadingManager();
	manager.onProgress = function( item, loaded, total ) {

		console.log( item, loaded, total );

	};

	var onProgress = function( xhr ) {

		if ( xhr.lengthComputable ) {

			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

		}

	};

	var onError = function( xhr ) {

		console.error( xhr );

	};

	var loader = new THREE.FBXLoader( manager );
	loader.load( 'assets/running2.fbx', function( object ) {
		object.scale.set(10,10,10);
		object.rotateX(90*Math.PI/180);

		object.mixer = new THREE.AnimationMixer( object );
		mixers.push( object.mixer );
		window.fbx = object;

		var action = object.mixer.clipAction( object.animations[ 0 ] );
		action.play();
		_scene.add( object );


	}, onProgress, onError );	


	_this.onWindowResize = function(){
		_camera.aspect = window.innerWidth / window.innerHeight;
		_camera.updateProjectionMatrix();	
	}

	_this.render = function(){
		if ( mixers.length > 0 ) {

			for ( var i = 0; i < mixers.length; i ++ ) {

				mixers[ i ].update( Time.deltaTime );

			}

		}

		mesh.rotateX(100*Math.PI/180*Time.deltaTime);
		mesh.rotateY(200*Math.PI/180*Time.deltaTime);
		_renderer.render(_scene,_camera);
	}
}