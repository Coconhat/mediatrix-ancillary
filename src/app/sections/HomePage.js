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
        {/* Component1: Sticky at the top with adjusted height */}
        <div className="sticky top-0 h-[600px] z-10">
          <Component1 />
        </div>

        {/* Component2: Sticky and positioned below Component1 */}
        <div className="sticky top-[600px] z-20">
          <Component2 />
        </div>
      </div>

      {/* Component 3 Section */}
      <div className="sticky top-[600px] z-30">

      <Component3 />
      </div>
    </div>
  );
};

export default HomePage;
