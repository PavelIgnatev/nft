import NftCard from "entities/NftCard";
import { FC } from "react";
import Slider from "react-slick";
import opensea from "../../shared/json/nextOpensea.json";
import classes from "./Slider2.module.scss";

type Slider2Props = {
  lang: "ru" | "tat" | "en";
};

const Slider2: FC<Slider2Props> = ({ lang }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={classes.slider}>
      {opensea.map(({ img, title, subtitle, opensea }) => {
        return (
          <NftCard
            key={img}
            img={img}
            title={
              //@ts-ignore
              title[lang]
            }
            subtitle={
              //@ts-ignore
              subtitle[lang]
            }
            opensea={opensea}
            lang={lang}
          />
        );
      })}
    </Slider>
  );
};

export default Slider2;
