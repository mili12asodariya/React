import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/videoplayer/VideoPlayer";

const App = () => {
  const [PlayState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="campus photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Say" />
        <Testimonials />
        <Title subTitle="Contact Us " title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer PlayState={PlayState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
