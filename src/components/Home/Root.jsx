import About from "./About/About";
import Explore from "./Explore/Explore";
import GlobalPartners from "./GlobalPartners/GlobalPartners";
import Goal from "./Goal/Goal";
import Hero from "./Hero/Hero";

const Root = () => {
  return (
    <div>
      <Hero />
      <About />
      <Goal />
      <Explore />
      <GlobalPartners></GlobalPartners>
    </div>
  );
};

export default Root;
