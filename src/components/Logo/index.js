import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import GlitchShader from "./GlitchShader"
// THREE.OBJLoader expects THREE to be a global object
if (typeof window !== 'undefined') {
  window.THREE = THREE;
} else {
  global.THREE = THREE;
}
require('three/examples/js/loaders/OBJLoader');

const Logo = () => {
  const mountRef = useRef(null);
  const controls = useRef(null);

  const scale = 0.8;
  const h = 300 * scale;
  const w = 600 * scale;

  useEffect(() => {
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    let frameId;
    let startTime = Date.now();

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera( -6 / 4, 6 / 4, 3 / 4, -3 / 4, .01, 1000 );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    let logoMesh;

    var loader = new window.THREE.OBJLoader();

    loader.load(("logo_01.obj"), (obj) => {
      logoMesh = obj.children[0];
      const mUniforms = {
        time: { value: 0 },
      };
      const material = new THREE.ShaderMaterial(
        {
          uniforms : mUniforms,
          vertexShader :  GlitchShader.vertex,
          fragmentShader :  GlitchShader.fragment,
          side : THREE.DoubleSide
        }
      );
      logoMesh.material = material;
      scene.add(logoMesh);
    })

    camera.position.z = 4;
    renderer.setClearColor('#FFFFFF');
    renderer.setSize(w, h);
    renderer.setPixelRatio(2)

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      // width = mountRef.current.clientWidth;
      // height = mountRef.current.clientHeight;
      // renderer.setSize(width, height);
      // camera.aspect = width / height;
      // camera.updateProjectionMatrix();
      renderScene();
    };

    const animate = () => {
      if(logoMesh) {
        logoMesh.material.uniforms.time.value = (Date.now() - startTime) / 1000;
      }
      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mountRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    start();

    controls.current = { start, stop };

    return () => {
      stop();
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);

      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div style={{ height: h, width: w}} ref={mountRef} />
  )
}

export default Logo;
