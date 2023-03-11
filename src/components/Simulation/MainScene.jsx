import { Vector3, Color3 } from "@babylonjs/core";
import { Scene, Engine } from "react-babylonjs";
import "@babylonjs/loaders";

const GROUND_SIZE = 1000;

function MainScene({ children }) {
  return (
    <div className="flex">
      <Engine
        antialias
        adaptToDeviceRatio
        canvasId="babylon-js"
        renderOptions={{
          whenVisibleOnly: true,
        }}
      >
        <Scene>
          <arcRotateCamera
            name="camera"
            alpha={0}
            beta={0}
            radius={10}
            target={Vector3.Zero()}
            setPosition={[new Vector3(20, 150, 300)]}
            lowerBetaLimit={0.1}
            upperBetaLimit={(Math.PI / 2) * 0.99}
            lowerRadiusLimit={150}
          />
          <hemisphericLight
            name="light1"
            intensity={1}
            direction={Vector3.Up()}
          />
          <ground
            name="ground"
            width={GROUND_SIZE}
            height={GROUND_SIZE}
            subdivisions={1}
          >
            <standardMaterial
              name="groundMat"
              diffuseColor={Color3.FromHexString("#3EB073")}
              specularColor={Color3.Black()}
            />
          </ground>

          {children}
        </Scene>
      </Engine>
    </div>
  );
}

export default MainScene;
