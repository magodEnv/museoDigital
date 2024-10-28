"use client";

import React, { useRef, useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import '@babylonjs/loaders/glTF/2.0/';

const ModeloGLTF = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const initBabylon = async () => {
      const canvas = canvasRef.current;
      const engine = new BABYLON.Engine(canvas, true);

      const createScene = async () => {
        const scene = new BABYLON.Scene(engine);

        // Crear una cámara
        const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 20, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);

        // Cargar el modelo GLB
      BABYLON.SceneLoader.ImportMeshAsync("", "./", "scene.glb", scene)
      .then((result) => {
          // Ajustar la posición y escala del modelo
          result.meshes[0].position.x = 0; // Centrar el modelo en el eje X
          result.meshes[0].position.y = 0; // Centrar el modelo en el eje Y
          result.meshes[0].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5); // Ajustar el tamaño del modelo
      })
      .catch((error) => {
          console.error("Error al cargar el modelo GLB:", error);
      });


        return scene;
      }

      const scene = await createScene();
      engine.runRenderLoop(() => {
        scene.render();
      });
    };

    initBabylon();
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default ModeloGLTF;