import React from "react";

import "./button.styles.scss";

const Button = ({ isPrimary, content }) => {
  return (
    <button className={isPrimary ? "button button--primary" : "button"}>
      {content}
    </button>
  );
};

export default Button;
