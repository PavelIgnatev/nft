import About from "features/About";
import Header from "features/Header";
import Home from "features/Main";
import Main from "features/Home";
import Team from "features/Team";
import Vision from "features/Vision";
import { useHistory } from "react-router-dom";

import classes from "./main-page.module.scss";

const MainPage = () => {
  const history = useHistory();
  const lang = history.location.pathname.replace("/", "") as
    | "ru"
    | "tat"
    | "en";

  return (
    <div className={classes.main}>
      <Header lang={lang} />
      <Home lang={lang} />
      <Main lang={lang} />
      <About lang={lang} />
      <Vision lang={lang} />
      <Team lang={lang} />
    </div>
  );
};

export default MainPage;
