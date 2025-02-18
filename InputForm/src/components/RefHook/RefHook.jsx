import { useEffect, useRef } from "react";

const RefHook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  //   this mean focus on the input fill
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const nameRef = useRef();
  return (
    <div className="flex justify-center items-center mb-10 ">
      <div className="bg-gray-600 p-6 rounded-3xl">
        <form onSubmit={handleSubmit} action="">
          <input
            className="mb-3"
            type="text"
            ref={nameRef}
            placeholder="Name"
            name="name"
            id=""
          />
          <br />
          <input
            className="mb"
            type="text"
            placeholder="Email"
            name="email"
            id=""
          />
          <br />
          <input
            className="mb-3"
            type="number"
            placeholder="Number"
            name="number"
            id=""
          />
          <br />
          <input
            className="mb-3"
            type="password"
            placeholder="Password"
            name="password"
            id=""
          />
          <br />
          <button
            className="mb-3 bg-green-900 p-3 rounded-2xl btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RefHook;
