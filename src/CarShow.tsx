import { CameraControls, useHelper } from "@react-three/drei";
import { Ground } from "./Ground";
import { ReactNode, useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

export function CarShow({ children }: { children: ReactNode }) {
  const lightRef = useRef<SpotLight>(null!);
  const cameraRef = useRef<CameraControls | null>(null);

  useHelper(lightRef, SpotLightHelper, "white");

  return (
    <>
      <spotLight ref={lightRef} intensity={50} position={[0, 5, 0]} />
      {children}
      <Ground />
      <CameraControls ref={cameraRef} minDistance={2} maxDistance={6} />
    </>
  );
}
