import { FC } from "react";
import classes from "./About.module.scss";
import keys from "../../shared/keys/keys.json";
import AboutCard from "entities/AboutCard";

type AboutProps = {
  lang: "ru" | "tat" | "en";
};

const About: FC<AboutProps> = ({ lang }) => {
  return (
    <section className={classes.about} id="about">
      <h1 className={classes.title}>{keys.common.about.title[lang]}</h1>
      <h3 className={classes.subtitle}>{keys.common.about.subtitle[lang]}</h3>
      {Object.keys(keys.common.about.info).map((key) => {
        return (
          <AboutCard
            key={
              //@ts-ignore
              keys.common.about.info[key].title[lang]
            }
            title={
              //@ts-ignore
              keys.common.about.info[key].title[lang]
            }
            subtitle={
              //@ts-ignore
              keys.common.about.info[key].subtitle[lang]
            }
          />
        );
      })}
    </section>
  );
};

export default About;
