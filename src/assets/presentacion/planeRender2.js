import * as THREE from './libs/three.module.js'

var scene, camera, renderer;
var geometry, material, cube, plane;

init();

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, .1, 100);
	camera.position.z = 20;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(300, 300);
	// PLANO
	geometry = new THREE.PlaneGeometry(10, 15, 2);
	material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide, wireframe: true });
	plane = new THREE.Mesh(geometry, material);
	scene.add(plane);
	document.getElementById("WebGL-output2").appendChild(renderer.domElement);


}

function animate() {
	requestAnimationFrame(animate);
	plane.rotation.x += 0.02;
	plane.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();
