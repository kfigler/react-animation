import { Link } from "react-router-dom";
import SlideDownTransition from "./SlideDownTransition";

export default function Navigation() {
  return (
    <SlideDownTransition>
      <nav className="nav-container">
        <div className="nav-item">
          <h1>
            <Link to="">Home</Link>
          </h1>
        </div>
        <div className="nav-item">
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/content">
            <h1>Content</h1>
          </Link>
        </div>
      </nav>
    </SlideDownTransition>
  );
}
