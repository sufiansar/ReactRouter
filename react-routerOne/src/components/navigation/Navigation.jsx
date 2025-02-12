import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="flex justify-center gap-20 mt-20">
        <NavLink className="bg-purple-600 p-3 rounded-2xl btn" to="/">
          Home
        </NavLink>
        <NavLink className="bg-purple-600 p-3 rounded-2xl btn" to="/about">
          About
        </NavLink>
        <NavLink className="bg-purple-600 p-3 rounded-2xl btn" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
