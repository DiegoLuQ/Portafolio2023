import React from "react";
import Contacto from "../templates/Home/Contacto";
import Hero from "../templates/Home/Hero";
import Projects from "../templates/Home/Projects";
import VideoBlogs from "../templates/Home/VideoBlogs";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <section>
        <div>
          <Projects />
        </div>
        <div>
          <Contacto />
        </div>
        <div>
          <VideoBlogs />
        </div>
        {/* <div>Videos</div>
        <div>Footer</div> */}
      </section>
      
    </main>
  );
};

export default Home;
