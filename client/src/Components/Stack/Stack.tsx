import * as React from "react";
import cn from "classnames";
import styles from "./Stack.module.scss";

export const StackScale = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;

type StackScaleType = (typeof StackScale)[number];

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  tabIndex?: number;
  children: React.ReactNode;
  gap?: StackScaleType;
  padding?: StackScaleType;
  paddingX?: StackScaleType;
  paddingY?: StackScaleType;
  paddingTop?: StackScaleType;
  paddingRight?: StackScaleType;
  paddingBottom?: StackScaleType;
  paddingLeft?: StackScaleType;
  debug?: boolean;
  inline?: boolean;
  direction?: "horizontal" | "vertical";
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
}

export function Stack({
  tabIndex,
  children,
  gap = 0,
  padding = 0,
  paddingX = 0,
  paddingY = 0,
  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  direction = "horizontal",
  debug = false,
  inline = false,
  justify,
  align,
  className,
  style,
  ...rest
}: StackProps) {
  const s = {
    display: inline ? "inline-flex" : "flex",
    justifyContent: justify,
    alignItems: align,
    flexDirection: (direction === "vertical"
      ? "column"
      : "row") as React.CSSProperties["flexDirection"],
    ...style,
  };

  return (
    <div
      tabIndex={tabIndex}
      style={s}
      className={
        cn(
          {
            [styles[`${direction}-${gap}`]]: gap,
            [styles[`padding-${padding}`]]: padding,
            [styles[`paddingX-${paddingX}`]]: paddingX,
            [styles[`paddingY-${paddingY}`]]: paddingY,
            [styles[`paddingTop-${paddingTop}`]]: paddingTop,
            [styles[`paddingRight-${paddingRight}`]]: paddingRight,
            [styles[`paddingBottom-${paddingBottom}`]]: paddingBottom,
            [styles[`paddingLeft-${paddingLeft}`]]: paddingLeft,
            [styles.debug]: debug,
          },
          className
        ) || undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
}
