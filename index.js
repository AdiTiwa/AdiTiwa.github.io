// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);


// const geometry = new THREE.BoxGeometry( 3, 3, 3 );
// const textureLoader = new THREE.TextureLoader();
// const materials = [
// new THREE.MeshBasicMaterial({ color: new THREE.Color(0x81D2C7) }),
// new THREE.MeshBasicMaterial({ color: new THREE.Color(0x81D2C7) }),
// new THREE.MeshBasicMaterial({ color: new THREE.Color(0x81D2C7) }),
// new THREE.MeshBasicMaterial({ color: new THREE.Color(0x407076) }),
// new THREE.MeshBasicMaterial({ color: new THREE.Color(0x407076) }),
// new THREE.MeshBasicMaterial({ color: new THREE.Color(0x407076) })
// ];
// const cube = new THREE.Mesh(geometry, materials);
// scene.add(cube);

// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();

// camera.position.z = 3;
// camera.position.x = -4;
// camera.rotation.y = 0.1