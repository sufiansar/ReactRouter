import Navigation from "../components/navigation/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
