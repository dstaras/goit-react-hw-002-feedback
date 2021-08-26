import React from "react";

const Section = ({ children, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
