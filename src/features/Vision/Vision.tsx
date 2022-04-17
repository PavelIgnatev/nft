import { FC } from "react";
import classes from "./Vision.module.scss";
import keys from "../../shared/keys/keys.json";
import classNames from "classnames";

type VisionProps = {
  lang: "ru" | "tat" | "en";
};

const Vision: FC<VisionProps> = ({ lang }) => {
  return (
    <section className={classes.vision} id="vision">
      <div className={classes.title}>{keys.common.vision.title[lang]}</div>
      <div className={classNames(classes.block, classes.black)}>
        <div className={classes.wrapper}>
          <div className={classes.titleBlock}>
            {keys.common.vision.nft.title[lang]}
          </div>
          <div className={classes.subtitleBlock}>
            {keys.common.vision.nft.subtitle[lang]}
          </div>
        </div>
        <div className={classes.img}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.5 15.75L23.625 44.625L10.5 31.5"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.wrapper}>
          <div className={classes.titleBlock}>
            {keys.common.vision.play.title[lang]}
          </div>
          <div className={classes.subtitleBlock}>
            {keys.common.vision.play.subtitle[lang]}
          </div>
        </div>
        <div className={classes.img}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 65 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.4998 60.1474C47.4576 60.1474 59.5832 48.0218 59.5832 33.064C59.5832 18.1063 47.4576 5.98071 32.4998 5.98071C17.5421 5.98071 5.4165 18.1063 5.4165 33.064C5.4165 48.0218 17.5421 60.1474 32.4998 60.1474Z"
              stroke="black"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.5 16.814V33.064L43.3333 38.4806"
              stroke="black"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.wrapper}>
          <div className={classes.titleBlock}>
            {keys.common.vision.eco.title[lang]}
          </div>
          <div className={classes.subtitleBlock}>
            {keys.common.vision.eco.subtitle[lang]}
          </div>
        </div>
        <div className={classes.img}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 65 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.4998 60.1474C47.4576 60.1474 59.5832 48.0218 59.5832 33.064C59.5832 18.1063 47.4576 5.98071 32.4998 5.98071C17.5421 5.98071 5.4165 18.1063 5.4165 33.064C5.4165 48.0218 17.5421 60.1474 32.4998 60.1474Z"
              stroke="black"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.5 16.814V33.064L43.3333 38.4806"
              stroke="black"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Vision;
