import { useState } from "react";
import { Link } from "react-router-dom";

export default function CloseButton() {

  const [closed, setClosed] = useState(true);

  function toggleOpen() {
    setClosed((open) => setClosed(!open));
  }

  return (
    <Link to="/">
      <div
        className={`button ${closed ? "" : "open"}`}
        onMouseEnter={toggleOpen}
        onMouseLeave={toggleOpen}
      >
        <div className="line left"></div>
        <div className="line right"></div>
      </div>
    </Link>
  );
}
