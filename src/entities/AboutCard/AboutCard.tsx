import { FC } from "react";
import classes from "./AboutCard.module.scss";

type AboutCardProps = {
  title: string;
  subtitle: string;
};

const AboutCard: FC<AboutCardProps> = ({ title, subtitle }) => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{subtitle}</div>
    </div>
  );
};

export default AboutCard;
