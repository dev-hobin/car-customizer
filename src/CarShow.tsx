import { useHelper } from "@react-three/drei";
import { Car } from "./Car";
import { Ground } from "./Ground";
import { useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

export function CarShow() {
  const ref = useRef<SpotLight>(null!);

  useHelper(ref, SpotLightHelper, "white");

  return (
    <>
      <spotLight ref={ref} intensity={50} position={[0, 5, 0]} />
      <Car />
      <Ground />
    </>
  );
}
