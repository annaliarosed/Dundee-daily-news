import React from "react";
import cn from "classnames";
import styles from "./TownLozenge.module.scss";
import { TownType } from "../../constants";
import { TownTypesMapping } from "../../Admin/Containers/CreateStoryPage/helpers";
import { Link } from "react-router-dom";

interface TownLozengeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  town: TownType | string;
}

const TownLozenge: React.FC<TownLozengeProps> = ({
  town,
  className,
  ...rest
}) => (
  <Link tabIndex={-1} to={`/neighborhood/${town}`}>
    <button className={cn(styles.lozenge, styles[town], className)} {...rest}>
      {TownTypesMapping[town as TownType]}
    </button>
  </Link>
);

export default TownLozenge;
