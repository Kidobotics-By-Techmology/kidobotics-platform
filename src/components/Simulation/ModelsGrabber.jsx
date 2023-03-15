import React, { useEffect } from "react";
import {
  SceneLoader,
  Vector3,
  Scene,
  TransformNode,
  Mesh,
} from "@babylonjs/core";
import { GizmoManager } from "@babylonjs/core/Gizmos";
import { PointerDragBehavior } from "@babylonjs/core/Behaviors/Meshes/pointerDragBehavior";
import { useScene } from "react-babylonjs";

export default function ModelsGrabber({ models }) {
  const path = `${process.env.PUBLIC_URL}/models/`;
  const scene = useScene();

  const GROUND_SIZE = 1000;
  useEffect(() => {
    const onSceneMount = (e) => {
      models.forEach(({ name, scale, rotation, yposition }) => {
        // choose a random position for the model
        const x = Math.random() * 10 - 5;
        const y = 0;
        const z = Math.random() * 10 - 5;

        SceneLoader.ImportMesh("", path, name, e.scene, (meshes) => {
          meshes.forEach(
            (mesh) => {
              // Create a parent transform node for the meshes
              const modelNode = new TransformNode(`${name}-node`, scene);

              modelNode.position._x = x;
              modelNode.position._y = yposition;
              modelNode.position._z = z;
              // Add the meshes to the parent node
              console.log(scale);
              meshes.forEach((mesh) => {
                mesh.scaling = new Vector3(scale, scale, scale);
                mesh.parent = modelNode;
                mesh.rotation = new Vector3(
                  rotation[0],
                  rotation[1],
                  rotation[2]
                );
              });

              // Add the PointerDragBehavior to the parent node
              const dragBehavior = new PointerDragBehavior({
                dragPlaneNormal: new Vector3(0, 1.2, 0),
                validateDrag: (targetPosition) => {
                  return (
                    Math.max(
                      Math.abs(targetPosition.x),
                      Math.abs(targetPosition.z)
                    ) <=
                    GROUND_SIZE / 2 - 10
                  ); // should be -15 for torus
                },
              });

              modelNode.addBehavior(dragBehavior);
              // scale the model
            },
            undefined,
            (scene, message) => console.error(message)
          );
        });
      });
    };

    if (scene) {
      onSceneMount({ scene });
    }
  }, [models, scene]);

  return null;
}
