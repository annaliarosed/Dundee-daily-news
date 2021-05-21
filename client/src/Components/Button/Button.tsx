import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button className={cn(styles.button, className)} {...rest}>
    {children}
  </button>
);

export default Button;
