import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { OrbitControls } from "@react-three/drei";
import { CarShow } from "./CarShow";

function App() {
  return (
    <Suspense fallback={null}>
      <Leva />
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 1,
          far: 1000,
          position: [0, 3, 5],
        }}
      >
        {/* <Leva /> */}
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper args={[20, 20, 0xff0000, "teal"]} />
        <color args={[0, 0, 0]} attach="background" />
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
