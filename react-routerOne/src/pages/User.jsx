import { Link } from "react-router-dom";

const User = ({ useral }) => {
  if (!useral) return <h1 className="text-red-500">User data not available</h1>;
  const { name, email, id } = useral;

  return (
    <div className=" bg-sky-300 ml-5 p-4 mt-4 rounded-3xl">
      {/* <h1>hey</h1> */}
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1 className="mb-6">{email}</h1>
      <Link
        className="bg-green-600 p-3 rounded-2xl  btn "
        to={`/singleuser ${id}`}
      >
        ShowDetails
      </Link>
    </div>
  );
};

export default User;
