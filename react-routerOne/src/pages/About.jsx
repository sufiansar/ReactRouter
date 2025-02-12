import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex justify-center gap-20 mt-20">
        <Link className="bg-pink-500 p-3 rounded-2xl btn" to="profile">
          Profile
        </Link>
        <Link className="bg-pink-500 p-3 rounded-2xl btn" to="settings">
          Settings
        </Link>
        <Link className="bg-pink-500 p-3 rounded-2xl btn" to="massage">
          Massage
        </Link>
        <Link className="bg-pink-500 p-3 rounded-2xl btn" to="singleuser">
          SingleUser
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
