import React from "react";
import MainScene from "./MainScene";
import ModelsGrabber from "./ModelsGrabber";
import { useState } from "react";

const baseurl = `${process.env.PUBLIC_URL}/models_images/`;

function SimulationView() {
  const modelData = [
    {
      id: 1,
      name: "Sensor",
      image: baseurl + "sensor.png",
      click: () => {
        setModels([
          {
            name: "sensor.gltf",
            scale: 10,
            rotation: [89.5, 0, 0],
            yposition: 35,
          },
        ]);
      },
    },
    {
      id: 2,
      name: "Brick 1",
      image: baseurl + "brick.png",
      click: () => {
        setModels([
          {
            name: "brick.gltf",
            scale: 100,
            rotation: [89.5, 0, 0],
            yposition: 31,
          },
        ]);
      },
    },
    {
      id: 3,
      name: "Brick 2",
      image: baseurl + "brick2.png",
      click: () => {
        setModels([
          {
            name: "brick2.gltf",
            scale: 20,
            rotation: [89.5, 0, 0],
            yposition: -45,
          },
        ]);
      },
    },
    {
      id: 4,
      name: "Brick 3",
      image: baseurl + "brick3.png",
      click: () => {
        setModels([
          {
            name: "brick3.gltf",
            scale: 20,
            rotation: [89.5, 0, 0],
            yposition: -2,
          },
        ]);
      },
    },
    {
      id: 5,
      name: "Light",
      image: baseurl + "light.png",
      click: () => {
        setModels([
          {
            name: "light.gltf",
            scale: 1,
            rotation: [-39.3, 0, 0],
            yposition: 51,
          },
        ]);
      },
    },
    {
      id: 6,
      name: "Button",
      image: baseurl + "red_button.png",
      click: () => {
        setModels([
          {
            name: "red_button.gltf",
            scale: 0.8,
            rotation: [0, 0, 0],
            yposition: 46,
          },
        ]);
      },
    },
    {
      id: 7,
      name: "Wheels",
      image: baseurl + "wheels.png",
      click: () => {
        setModels([
          {
            name: "wheels.gltf",
            scale: 0.4,
            rotation: [0, 89.5, 0],
            yposition: 32,
          },
        ]);
      },
    },
  ];

  const [models, setModels] = useState([]);

  const addModel = () => {
    setModels([
      {
        name: "sensor.gltf",
        scale: 20,
        rotation: [89.5, 0, 0],
        yposition: 20,
      },
    ]);
  };

  return (
    <div className="flex flex-row ">
      <div className="w-1/6 p-4 overflow-y-auto max-h-screen bg-yellow">
        <ul className="flex flex-col items-center space-y-4">
          {modelData.map((model) => (
            <button onClick={model.click}>
              <li
                key={model.id}
                className="mx-auto rounded-md hover:bg-purple hover:invert  transition-all ease-out 2s hover:scale-105"
              >
                <div className="overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-40 w-40 rounded-md object-cover "
                  />
                </div>

                <span className="text-lg font-medium">{model.name}</span>
              </li>
            </button>
          ))}
        </ul>
      </div>
      <div className="w-5/6 p-4">
        <MainScene>
          <ModelsGrabber models={models} />
        </MainScene>
      </div>
    </div>
  );
}

export default SimulationView;
