import { FC } from "react";
import Slider from "react-slick";
import opensea from "../../shared/json/opensea.json";
import classes from "./Slider.module.scss";
import Media from "react-media";

const MySlider: FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const settingsSmall = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const settingsMedium = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const settingsDefault = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <Media
      queries={{
        min: "(min-width: 1px)",
        small: "(min-width: 400px)",
        medium: "(min-width: 750px)",
        large: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <>
          {matches.min && !matches.small && !matches.large && !matches.medium && (
            <Slider {...settings} className={classes.slider}>
              {opensea.map((link) => (
                <div key={link}>
                  <img src={link} alt="" className={classes.img} />
                </div>
              ))}
            </Slider>
          )}
          {matches.small && !matches.large && !matches.medium && (
            <Slider {...settingsSmall} className={classes.slider}>
              {opensea.map((link) => (
                <div key={link}>
                  <img src={link} alt="" className={classes.img} />
                </div>
              ))}
            </Slider>
          )}
          {matches.medium && !matches.large && (
            <Slider {...settingsMedium} className={classes.slider}>
              {opensea.map((link) => (
                <div key={link}>
                  <img src={link} alt="" className={classes.img} />
                </div>
              ))}
            </Slider>
          )}
          {matches.large && (
            <Slider {...settingsDefault} className={classes.slider}>
              {opensea.map((link) => (
                <div key={link}>
                  <img src={link} alt="" className={classes.img} />
                </div>
              ))}
            </Slider>
          )}
        </>
      )}
    </Media>
  );
};

export default MySlider;
