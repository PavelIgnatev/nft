import classNames from "classnames";
import NavLink from "entities/NavLink";
import { FC, useCallback, useEffect, useState } from "react";
import keys from "../../shared/keys/keys.json";
import classes from "./Header.module.scss";

type HeaderProps = {
  lang: "ru" | "tat" | "en";
};

const Header: FC<HeaderProps> = ({ lang }) => {
  const [isColor, setColor] = useState<boolean>(false);
  const [active, setActvie] = useState<boolean>(true);
  const realLang = lang.replace("/", "");
  const newLang =
    realLang === "ru"
      ? "/tat"
      : realLang === "en"
      ? "/ru"
      : realLang === "tat"
      ? "/en"
      : "/ru";

  const handleScroll = useCallback(() => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    setColor(scrolled > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    !active
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [active]);

  return (
    <header
      className={classNames(classes.header, !isColor ? classes.white : "")}
    >
      <div className={classes.img}>Akbars</div>
      <div className={classes.wrapper}>
        <nav
          className={active ? classes.nav : classes.mobileNav}
          onClick={() => {
            setActvie(true);
            window.scrollTo(0, 0);
          }}
        >
          <NavLink to="#home">{keys.common.header.nav.home[lang]}</NavLink>
          <NavLink to="#about">{keys.common.header.nav.about[lang]}</NavLink>
          <NavLink to="#vision">{keys.common.header.nav.vision[lang]}</NavLink>
          <NavLink to="#team">{keys.common.header.nav.team[lang]}</NavLink>
          <NavLink to={newLang} className={classes.lang}>
            {newLang.replace("/", "")}
          </NavLink>
          <NavLink to="https://opensea.io/collection/ak-bars-tatar" target>
            <img
              src="https://static.wixstatic.com/media/9513a6_ee583a2deb99469ab282796ad855f653~mv2.png/v1/fill/w_78,h_78,al_c,usm_0.66_1.00_0.01,enc_auto/9513a6_ee583a2deb99469ab282796ad855f653~mv2.png"
              alt="opensea_logo"
              className={classes.opensea}
            ></img>
          </NavLink>
        </nav>
        {active && (
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.burger}
            onClick={() => {
              setActvie(!active);
              window.scrollTo(0, 0);
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
            />
          </svg>
        )}
        {!active && (
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 490 490"
            className={classes.burger}
            style={{ width: "24px", marginRight: "10px" }}
            onClick={() => {
              setActvie(!active);
              window.scrollTo(0, 0);
            }}
          >
            <polygon
              points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 
	11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
