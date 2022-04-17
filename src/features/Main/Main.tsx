import { FC } from "react";
import face from "../../shared/icons/face.png";
import arrow from "../../shared/icons/arrow.png";
import classes from "./Main.module.scss";
import NavLink from "../../entities/NavLink";

type MainProps = {
  lang: "ru" | "tat" | "en";
};

const Main: FC<MainProps> = ({ lang }) => {
  return (
    <section className={classes.Main} id="main">
      <img src={face} alt="" className={classes.face} />
      <NavLink to="#home">
        <img src={arrow} alt="" className={classes.arrow} />
      </NavLink>
    </section>
  );
};

export default Main;
