import React from "react";
import Hero from "../../components/Home/Hero";
import Brand from "../../components/Home/Brand";
import Searvice from "../../components/Home/Searvice";
import Prefered from "../../components/Home/Prefered";
import Slider from "../../components/Home/Slider";
import Counter from "../../components/Home/Counter";
import GetStart from "../../components/Home/GetStart";

const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Searvice />
      <Prefered />
      <Slider />
      <Counter />
      <GetStart />
    </>
  );
};

export default Home;
