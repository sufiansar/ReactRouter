import NavigationPart from "../NavigationPart/NavigationPart";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <NavigationPart></NavigationPart>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
