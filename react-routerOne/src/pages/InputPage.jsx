import { Outlet } from "react-router-dom";

const InputPage = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="number" name="" id="" placeholder="Number" />
      </form>
    </div>
  );
};

export default InputPage;
