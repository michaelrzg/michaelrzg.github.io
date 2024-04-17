import { GLTFLoader } from '/node/three/examples/jsm/loaders/GLTFLoader.js';

const scenePath = '/public/models/MikesChickenShopL.gltf'

export const LoadGLTFByPath = (scene) => {
    return new Promise((resolve, reject) => {
      // Create a loader
      const loader = new GLTFLoader();
  
      // Load the GLTF file
      loader.load(scenePath, (gltf) => {

        scene.add(gltf.scene);

        resolve();
      }, undefined, (error) => {
        reject(error);
      });
    });
};