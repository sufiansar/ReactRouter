import { NavLink } from "react-router-dom";

const NavigationPart = () => {
  return (
    <div className="flex justify-center gap-6 mt-40">
      <NavLink className="bg-purple-600 rounded-2xl p-3 mb-6" to={"/"}>
        Home
      </NavLink>
      <NavLink className="bg-purple-600 rounded-2xl p-3 mb-6" to={"/contract"}>
        Contract
      </NavLink>
      <NavLink className="bg-purple-600 rounded-2xl p-3 mb-6" to={"/about"}>
        About
      </NavLink>
      <NavLink className="bg-purple-600 rounded-2xl p-3 mb-6" to={"/inputpage"}>
        InPutPage
      </NavLink>
      <NavLink className="bg-purple-600 rounded-2xl p-3 mb-6" to={"/posts"}>
        Posts
      </NavLink>
    </div>
  );
};

export default NavigationPart;
