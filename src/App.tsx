import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Car } from "./Car";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        camera={{
          fov: 50,
          near: 1,
          far: 10,
          position: [0, 3, 5],
        }}
      >
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper args={[20, 20, 0xff0000, "teal"]} />
        <Car />
      </Canvas>
    </Suspense>
  );
}

export default App;
