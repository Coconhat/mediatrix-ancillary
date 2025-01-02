import React from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />

      {/* Sticky Scroll Sections */}
      <div className="relative">
        {/* Component1: Sticky at the top, but scrolls away when you scroll */}
        <div className="sticky top-0 z-10">
          <Component1 />
        </div>

        {/* Component2: Sticky after Component1, should stick when Component1 moves out of view */}
        <div className="sticky top-[400px] z-20">
          <Component2 />
        </div>
      </div>

      {/* Component 3 Section */}
      <div className="z-30">
        <Component3 />
      </div>
    </div>
  );
};

export default HomePage;
