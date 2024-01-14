import { useTexture } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLayoutEffect } from "react";
import { RepeatWrapping, Vector2 } from "three";

export function Ground() {
  const [normalTexture, roughnessTexture] = useTexture([
    "/textures/stone-normal.jpeg",
    "/textures/stone-rough.jpeg",
  ]);

  useLayoutEffect(() => {
    [normalTexture, roughnessTexture].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.setScalar(10);
    });
  }, [normalTexture, roughnessTexture]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        mirror={0}
        dithering={true}
        color={"#050505"}
        resolution={1024}
        normalMap={normalTexture}
        normalScale={new Vector2(0.01, 0.01)}
        roughnessMap={roughnessTexture}
        roughness={0.7}
        mixStrength={80}
        mixContrast={1}
        reflectorOffset={0.2}
      />
    </mesh>
  );
}
