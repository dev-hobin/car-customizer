import { ComponentPropsWithoutRef } from "react";
import { COLOR_RGB, ColorType } from "./Car";

type ColorButtonProps = ComponentPropsWithoutRef<"button"> & {
  isSelected?: boolean;
  color?: ColorType;
};
export function ColorButton({
  isSelected = false,
  color = "BLACK",
  ...rest
}: ColorButtonProps) {
  return (
    <button
      {...rest}
      type={rest.type ?? "button"}
      style={{
        background: `rgb(${COLOR_RGB[color].outer})`,
        border: isSelected
          ? "2px solid rgba(206,206,206,0.9)"
          : `2px solid rgb(${COLOR_RGB[color].outer})`,
        width: 24,
        height: 24,
        ...rest.style,
      }}
      aria-label={color}
    ></button>
  );
}
