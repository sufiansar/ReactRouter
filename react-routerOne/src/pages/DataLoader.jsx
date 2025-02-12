import { useLoaderData } from "react-router-dom";
import User from "./User";

const DataLoader = () => {
  const users = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-3 mx-auto">
        {users.map((userH) => (
          <User key={userH.id} useral={userH}></User>
        ))}
      </div>
    </div>
  );
};

export default DataLoader;
