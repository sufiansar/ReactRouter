import { useNavigate, Link } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center mt-10 gap-10">
        <button
          onClick={() => navigate("/about/input")}
          className="btn bg-green-700 text-white font-bold  p-4 rounded-3xl"
        >
          Input
        </button>
        <br />
        <button
          onClick={() => navigate("/about/massage")}
          className="btn bg-green-900 text-white font-bold p-4 rounded-3xl"
        >
          Massage
        </button>

        {/* <Link to={"/user"}>User</Link> */}
        <button
          className="btn bg-green-900 text-white font-bold  p-4 rounded-3xl"
          onClick={() => navigate("/about/user")}
        >
          User
        </button>
      </div>
    </div>
  );
};

export default Setting;
