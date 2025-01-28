import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="bg-purple-500 mt-10">
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link>
        {/* <Link to="/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link> */}
      </nav>
    </header>
  );
};

export default Navigation;
