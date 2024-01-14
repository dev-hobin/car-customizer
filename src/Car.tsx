import { useGLTF } from "@react-three/drei";
import { useLayoutEffect } from "react";
import { Color, Mesh, MeshStandardMaterial } from "three";

export type ColorType = "BLACK" | "WHITE" | "RED" | "ORANGE" | "BLUE";

const COLOR_NORMALIZED_RGB = {
  BLACK: {
    outer: [0.067, 0.067, 0.067],
  },
  WHITE: {
    outer: [1, 1, 1],
  },
  RED: {
    outer: [1, 0, 0],
  },
  ORANGE: {
    outer: [1, 0.62745, 0],
  },
  BLUE: {
    outer: [0, 0.2196, 1],
  },
};

export const COLOR_RGB = {
  BLACK: {
    outer: COLOR_NORMALIZED_RGB.BLACK.outer.map((v) => v * 255),
  },
  WHITE: {
    outer: COLOR_NORMALIZED_RGB.WHITE.outer.map((v) => v * 255),
  },
  RED: {
    outer: COLOR_NORMALIZED_RGB.RED.outer.map((v) => v * 255),
  },
  ORANGE: {
    outer: COLOR_NORMALIZED_RGB.ORANGE.outer.map((v) => v * 255),
  },
  BLUE: {
    outer: COLOR_NORMALIZED_RGB.BLUE.outer.map((v) => v * 255),
  },
};

export function Car({ color }: { color: ColorType }) {
  const gltf = useGLTF("/models/car.glb");

  // 외판 - 66, color
  // NO STEP - 74, color
  // Side - 127, 137, emit

  useLayoutEffect(() => {
    const mesh = gltf.nodes["Object_66"];
    if (mesh instanceof Mesh && mesh.material instanceof MeshStandardMaterial) {
      mesh.material.color = new Color(...COLOR_NORMALIZED_RGB[color].outer);
    }
  }, [gltf, color]);

  return <primitive object={gltf.scene} />;
}
