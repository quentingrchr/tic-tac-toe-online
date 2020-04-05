import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/github-icon.svg";

import "./github.styles.scss";

const Github = () => {
  return (
    <div className="github">
      <p>made by quentingrchr</p>
      <a href="https://github.com/quentingrchr">
        <GithubIcon />
      </a>
    </div>
  );
};

export default Github;
