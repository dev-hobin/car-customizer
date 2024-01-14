import { useHelper } from "@react-three/drei";
import { Car } from "./Car";
import { Ground } from "./Ground";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

export function CarShow() {
  const ref = useRef<DirectionalLight>(null!);

  useHelper(ref, DirectionalLightHelper, 5);

  return (
    <>
      <directionalLight
        ref={ref}
        intensity={2}
        position={[0, 10, 0]}
        castShadow
      />
      <Car />
      <Ground />
    </>
  );
}
