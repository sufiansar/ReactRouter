import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/about/input")} // Absolute path
        className="btn bg-green-700 text-white font-bold mt-10"
      >
        Input
      </button>
      <br />
      <button
        onClick={() => navigate("/about/massage")} // Absolute path
        className="btn bg-green-900 text-white font-bold mt-10"
      >
        Massage
      </button>
    </div>
  );
};

export default Setting;
