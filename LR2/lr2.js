import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';


document.addEventListener("DOMContentLoaded", () => {
	const start = async() => {
		const mindarThree = new MindARThree({
			container: document.body,
			imageTargetSrc: "targets_go.mind",
			uiScanning: "yes",
			uiLoading: "yes",
		      });
		const {renderer, scene, camera} = mindarThree;

		const geometry1 = new THREE.PlaneGeometry(1, 1);
		const material1 = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
		const plane = new THREE.Mesh( geometry1, material1 );
		plane.position.set(0, 0, 0);

		const geometry2 = new THREE.BoxGeometry( 0.5, 0.5, 0.5 ); 
		const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
		const cube = new THREE.Mesh( geometry2, material2 ); 
		cube.position.set(0, 0, 0.5);

		const geometry3 = new THREE.SphereGeometry( 0.2, 32, 16 ); 
		const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
		const sphere = new THREE.Mesh( geometry3, material3 );
		sphere.position.set(0, 0, 1);

		const anchor = mindarThree.addAnchor(0);
		anchor.group.add(plane);
		anchor.group.add(cube);
		anchor.group.add(sphere);

		await mindarThree.start();
		renderer.setAnimationLoop(() => {
			  renderer.render(scene, camera);
		});
	}
	start();
});