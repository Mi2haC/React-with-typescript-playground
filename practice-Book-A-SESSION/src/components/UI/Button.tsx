import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

// <button> , <Link> どちらでも使用する共通Props
// textOnlyであればCSSで'button--text-only'を追加する
type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

// button要素のデフォルトPropsと共通Props
// Link要素のデフォルトPropsと共通Props
// コンポーネントのPropsにtoが指定されているかどうかでbuttonとLinkを振り分けたい
type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to: string };

// 引数propsにtoが指定されていればpropsはLink要素であると判定する関数
function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    // Link要素であることを判定することで、otherPropsはLinkに適用できるものとなる
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  // button要素であることを判定することで、otherPropsはLinkに適用できるものとなる
  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
