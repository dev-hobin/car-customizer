import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, useProgress } from "@react-three/drei";
import { CarShow } from "./CarShow";
import { Car, ColorType } from "./Car";
import { ColorButton } from "./ColorButton";

function App() {
  const [type, setType] = useState<ColorType>("BLACK");
  const progress = useProgress();
  const isLoaded = progress.active === false && progress.progress === 100;

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 75,
          position: [0, 3, 5],
        }}
      >
        <Suspense fallback={null}>
          {/* <Leva /> */}
          <OrbitControls />
          <axesHelper args={[5]} />
          <gridHelper args={[20, 20, 0xff0000, "teal"]} />
          <color args={[0, 0, 0]} attach="background" />
          <CarShow>
            <Car color={type} />
          </CarShow>
        </Suspense>
      </Canvas>
      <div
        style={{
          position: "fixed",
          background: "white",
          width: "100%",
          top: "100%",
          bottom: 0,
          display: isLoaded ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: 8,
            position: "relative",
            bottom: 8 + 48,
            background: "#efefef1a",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <ColorButton
            isSelected={type === "BLACK"}
            color="BLACK"
            onClick={() => setType("BLACK")}
          />
          <ColorButton
            isSelected={type === "WHITE"}
            color="WHITE"
            onClick={() => setType("WHITE")}
          />
          <ColorButton
            isSelected={type === "RED"}
            color="RED"
            onClick={() => setType("RED")}
          />
          <ColorButton
            isSelected={type === "ORANGE"}
            color="ORANGE"
            onClick={() => setType("ORANGE")}
          />
          <ColorButton
            isSelected={type === "BLUE"}
            color="BLUE"
            onClick={() => setType("BLUE")}
          />
        </div>
      </div>
      <Loader />
    </>
  );
}

export default App;
