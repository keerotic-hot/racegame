function Skybox(){
	var _this = this;
	var _geo = new THREE.SphereGeometry(2000,16,8);
	_geo.scale(-1,1,1);
	var _mat = new THREE.MeshBasicMaterial({
		map:new THREE.TextureLoader().load('img/skybox.jpg')
	});
	var _mesh = new THREE.Mesh(_geo,_mat);

	_this.mesh = _mesh;
}
