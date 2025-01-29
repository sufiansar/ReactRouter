import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="flex justify-center gap-20 mt-20">
        <Link className="bg-purple-600 p-3 rounded-2xl btn" to="/">
          Home
        </Link>
        <Link className="bg-purple-600 p-3 rounded-2xl btn" to="/about">
          About
        </Link>
        <Link className="bg-purple-600 p-3 rounded-2xl btn" to="/contact">
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
