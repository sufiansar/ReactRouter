import { useState } from "react";

const InputPage = () => {
  const [user, setuser] = useState({ name: "", password: "", number: "" });
  const { name, password, number } = user;

  const handleChangeName = (e) => {
    setuser({ [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    console.log("more dekha jay");

    console.log(user);

    e.preventDefault();
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="bg-sky-300 mt-5 w-96 rounded-2xl p-5 flex flex-col justify-center ">
        <form onSubmit={handleSubmit} className="">
          <label htmlFor="name">
            <input
              className="mb-6 border-b-2 bg-gray-400"
              type="text"
              name="name"
              onChange={handleChangeName}
              required
              value={name}
              placeholder="Name"
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              className="mb-6 border-b-2 bg-gray-400"
              type="password"
              required
              name="password"
              value={password}
              onChange={handleChangeName}
              placeholder="Password"
            />
          </label>
          <br />
          <label htmlFor="number">
            <input
              className="mb-6"
              type="number"
              name="number"
              value={number}
              onChange={handleChangeName}
              id=""
              required
              placeholder="Number"
            />
          </label>
          <button className="bg-green-600 p-3 rounded-2xl" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputPage;
