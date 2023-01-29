import React from "react";
import Hero from "../templates/Projects/Hero";
import Section from "../templates/Projects/Section";

const WebVideos = () => {
  const cantidad = 5;
  return (
    <main>
      {/* Hero */}
      <Hero
        titulo="Training Videos"
        subtitulo="@Somosdev"
      />
      <hr className="mt-3 border border-teal-400" />
      {/* section */}
      <Section children={true} />
    </main>
  );
};

export default WebVideos;
