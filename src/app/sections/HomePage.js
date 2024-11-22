import React from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* Sticky Scroll Section */}
      <div className="relative">
        <div className="sticky top-0 h-screen">
          <Component1 />
        </div>
        <div className="sticky top-0 h-screen">
          <Component2 />
        </div>
      </div>
      <Component3 />

      <div className="p-8">
        <p className="mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          facere quos illum exercitationem aut commodi inventore velit, dolore
          pariatur molestias earum dolores labore nulla aspernatur aliquam culpa
          neque vel sunt?
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          delectus harum esse eum magni incidunt atque dolorem ut voluptatibus,
          ipsa doloremque necessitatibus cupiditate repellendus, nostrum in
          eaque. Perspiciatis, tempore numquam.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          inventore rem quaerat tenetur, explicabo beatae molestias quidem
          perferendis sunt pariatur unde sapiente ipsam minus, perspiciatis
          impedit veritatis in voluptates!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          inventore rem quaerat tenetur, explicabo beatae molestias quidem
          perferendis sunt pariatur unde sapiente ipsam minus, perspiciatis
          impedit veritatis in voluptates!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          inventore rem quaerat tenetur, explicabo beatae molestias quidem
          perferendis sunt pariatur unde sapiente ipsam minus, perspiciatis
          impedit veritatis in voluptates!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          inventore rem quaerat tenetur, explicabo beatae molestias quidem
          perferendis sunt pariatur unde sapiente ipsam minus, perspiciatis
          impedit veritatis in voluptates!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
