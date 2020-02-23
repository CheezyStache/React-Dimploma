import React from "react";
import "./rootTemplateStyles.css";

function RootTemplate({ navigator, children }) {
  return (
    <div className="root">
      <div className="navigator">{navigator}</div>
      <div className="main">{children}</div>
    </div>
  );
}

export default RootTemplate;
