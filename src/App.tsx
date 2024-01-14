import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CarShow } from "./CarShow";
import { Car, ColorType } from "./Car";
import { ColorButton } from "./ColorButton";

function App() {
  const [type, setType] = useState<ColorType>("BLACK");

  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 1,
          far: 50,
          position: [0, 3, 5],
        }}
      >
        {/* <Leva /> */}
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper args={[20, 20, 0xff0000, "teal"]} />
        <color args={[0, 0, 0]} attach="background" />
        <CarShow>
          <Car color={type} />
        </CarShow>
      </Canvas>
      <div
        style={{
          position: "fixed",
          background: "white",
          width: "100%",
          top: "100%",
          bottom: 0,
          display: "flex",
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
    </Suspense>
  );
}

export default App;
