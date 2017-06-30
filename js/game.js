var db = firebase.database();

var STATE = {
	MAINMENU:'MAINMENU',
}

var renderer;
var mainmenu;

var state = STATE.MAINMENU;

function init(){
	console.log('hello');

	container = document.createElement('div');
	container.className = 'container';
	document.body.appendChild(container);

	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setPixelRatio(window.devicePixelRatio);
	container.appendChild(renderer.domElement);

	mainmenu = new MainMenu(renderer);

	window.addEventListener('resize',onWindowResize);
	onWindowResize();

	loop();
}

function onWindowResize(){
	renderer.setSize(window.innerWidth,window.innerHeight);
	mainmenu.onWindowResize();
}

function render(){
	switch(state){
		case STATE.MAINMENU:
			mainmenu.render();
		break;
	}
}

function loop(){
	requestAnimationFrame(loop);
	Time.update();

	render();
}