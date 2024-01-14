import { useHelper } from "@react-three/drei";
import { Ground } from "./Ground";
import { ReactNode, useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

export function CarShow({ children }: { children: ReactNode }) {
  const ref = useRef<SpotLight>(null!);

  useHelper(ref, SpotLightHelper, "white");

  return (
    <>
      <spotLight ref={ref} intensity={50} position={[0, 5, 0]} />
      {children}
      <Ground />
    </>
  );
}
