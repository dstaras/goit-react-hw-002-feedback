import React from "react";

const ButtonFeedback = ({ btnName, countFeedback }) => {
  return btnName.map((name) => (
    <button onClick={() => countFeedback(name)} key={name}>
      {name}
    </button>
  ));
};

export default ButtonFeedback;
