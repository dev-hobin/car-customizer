import { useGLTF } from "@react-three/drei";

export function Car() {
  const gltf = useGLTF("/models/car.glb");

  return <primitive object={gltf.scene} />;
}
