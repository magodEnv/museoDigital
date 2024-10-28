//use client side rendering
import React, { useRef, useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders'; // Asegúrate de tener este paquete instalado para cargar GLTF

const Box = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
      const scene = new BABYLON.Scene(engine);

      // Crear una cámara
      const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 20, new BABYLON.Vector3(0, 0, 0), scene);
      camera.attachControl(canvas, true);

      // Crear una luz
      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

      // Cargar el modelo GLTF
      BABYLON.SceneLoader.ImportMeshAsync("", "/3d/gltf/", "scene.gltf", scene)
      .then((result) => {
          // Ajustar la posición y escala del modelo
          result.meshes[0].position.x = 0; // Centrar el modelo en el eje X
          result.meshes[0].position.y = 0; // Centrar el modelo en el eje Y
          result.meshes[0].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5); // Ajustar el tamaño del modelo
      })
      .catch((error) => {
          console.error("Error al cargar el modelo GLTF:", error);
      });

      return scene;
    };

    const scene = createScene();

    engine.runRenderLoop(() => {
      scene.render();
    });

    // Limpiar recursos al desmontar el componente
    return () => {
      engine.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default Box;