import { useTexture } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLayoutEffect } from "react";
import { LinearSRGBColorSpace, RepeatWrapping, Vector2 } from "three";

export function Ground() {
  const [normalTexture, roughnessTexture] = useTexture([
    "/textures/ground-normal.jpeg",
    "/textures/ground-rough.jpeg",
  ]);

  useLayoutEffect(() => {
    [normalTexture, roughnessTexture].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.setScalar(10);
    });

    normalTexture.colorSpace = LinearSRGBColorSpace;
    roughnessTexture.colorSpace = LinearSRGBColorSpace;
  }, [normalTexture, roughnessTexture]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        mirror={0}
        resolution={1024}
        color={"#050505"}
        normalMap={normalTexture}
        normalScale={new Vector2(0.02, 0.02)}
        roughnessMap={roughnessTexture}
        roughness={0.7}
        mixStrength={80}
        mixContrast={1}
      />
    </mesh>
  );
}
