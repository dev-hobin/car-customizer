import { CameraControls } from "@react-three/drei";
import { Ground } from "./Ground";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { SpotLight } from "three";
import { useFrame } from "@react-three/fiber";

export function CarShow({
  children,
  isRotating,
}: {
  children: ReactNode;
  isRotating: boolean;
}) {
  const lightRef = useRef<SpotLight>(null!);
  const cameraRef = useRef<CameraControls | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useLayoutEffect(() => {
    if (!cameraRef.current) return;
    cameraRef.current.setTarget(0, 0, 0, false);
    cameraRef.current.setPosition(0, 3, 5, false);
    cameraRef.current.mouseButtons.right = 0;
  }, []);

  const angleRef = useRef(0);
  useLayoutEffect(() => {
    if (!cameraRef.current) return;

    if (isRotating) {
      setIsTransitioning(true);
      angleRef.current = 0;
      cameraRef.current.mouseButtons.right = 0;
      cameraRef.current
        .setPosition(0, 3, 5, true)
        .then(() => setIsTransitioning(false));
    } else {
      cameraRef.current.mouseButtons.right = 16;
    }
  }, [isRotating]);

  useFrame(() => {
    if (!cameraRef.current) return;
    if (!isRotating) return;
    if (isTransitioning) return;

    const camera = cameraRef.current;
    camera.setPosition(
      5 * Math.sin(angleRef.current),
      3,
      5 * Math.cos(angleRef.current)
    );
    angleRef.current += 0.002;
  });

  // useHelper(lightRef, SpotLightHelper, "white");

  return (
    <>
      <spotLight ref={lightRef} intensity={50} position={[0, 5, 0]} />
      {children}
      <Ground />
      <CameraControls
        ref={cameraRef}
        minDistance={2}
        maxDistance={6}
        lockPointer={() => true}
      />
    </>
  );
}
