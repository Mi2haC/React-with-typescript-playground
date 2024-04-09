import type { ComponentPropsWithoutRef } from "react";

// labelとinput要素をもったdivを出力させたい
// input要素のデフォルトPropsと、labelの内容とlabelとinputを紐づけるidをPropsとして受け取りたい
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}
