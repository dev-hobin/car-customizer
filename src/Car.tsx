import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function Car() {
  const gltf = useLoader(GLTFLoader, "/models/car.glb");

  return <primitive object={gltf.scene} />;
}
