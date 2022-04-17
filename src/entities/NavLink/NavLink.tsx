import { FC } from "react";
import classes from "./NavLink.module.scss";
import classNames from "classnames";

type NavLinkProps = {
  to: string;
  target?: boolean;
  className?: string;
};

const NavLink: FC<NavLinkProps> = ({ to, target, className, children }) => {
  return (
    <a
      className={classNames(classes.navLink, className)}
      href={to}
      target={target ? "_blank" : ""}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default NavLink;
