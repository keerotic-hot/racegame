var db = firebase.database();

var STATE = {
	MAINMENU:'MAINMENU',
	GAMESTAGE:'GAMESTAGE',
}

var renderer;
var mainmenu;
var gamestage;

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
	gamestage = new GameStage(renderer);

	window.addEventListener('resize',onWindowResize);
	onWindowResize();

	loop();
}

function onWindowResize(){
	renderer.setSize(window.innerWidth,window.innerHeight);
	mainmenu.onWindowResize();
	gamestage.onWindowResize();
}

function render(){
	switch(state){
		case STATE.MAINMENU:
			mainmenu.render();
		break;
		case STATE.GAMESTAGE:
			gamestage.render();
		break;
	}
}

function loop(){
	requestAnimationFrame(loop);
	Time.update();

	render();
}