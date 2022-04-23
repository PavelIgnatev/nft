import { FC } from "react";
import classes from "./Team.module.scss";
import pavel from "../../shared/icons/pavel.png";
import rustam from "../../shared/icons/rustam.png";
import lenar from "../../shared/icons/lenar.png";
import keys from "../../shared/keys/keys.json";

type TeamProps = {
  lang: "ru" | "tat" | "en";
};

const Team: FC<TeamProps> = ({ lang }) => {
  return (
    <section className={classes.team} id="team">
      <div className={classes.title}>{keys.common.team.title[lang]}</div>

      <div className={classes.wrapper}>
        <div className={classes.card}>
          <img src={pavel} alt="" className={classes.img} />
          <div className={classes.name}>
            {keys.common.team.pavel.name[lang]}
          </div>
          <div className={classes.work}>
            {keys.common.team.pavel.work[lang]}
          </div>
        </div>
        <div className={classes.card}>
          <img src={rustam} alt="" className={classes.img} />
          <div className={classes.name}>
            {keys.common.team.rustam.name[lang]}
          </div>
          <div className={classes.work}>
            {keys.common.team.rustam.work[lang]}
          </div>
        </div>
        <div className={classes.card}>
          <img src={lenar} alt="" className={classes.img} />
          <div className={classes.name}>
            {keys.common.team.lenar.name[lang]}
          </div>
          <div className={classes.work}>
            {keys.common.team.lenar.work[lang]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
