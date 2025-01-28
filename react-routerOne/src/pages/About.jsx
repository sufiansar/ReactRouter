import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About page</h1>

      <div className="bg-gray-400">
        <Link to="profile" style={{ margin: "0 10px" }}>
          Profile
        </Link>
        <Link to="settings" style={{ margin: "0 10px" }}>
          Settings
        </Link>
        <Link to="massage">Massage</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
