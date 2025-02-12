const InputSubmit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.number.value);

    // console.log("submit clicked");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} action="">
        <input
          className="mb-10"
          type="text"
          placeholder="Name"
          name="name"
          id=""
        />
        <br />
        <input
          className="mb-10"
          type="text"
          placeholder="Email"
          name="email"
          id=""
        />
        <br />
        <input type="number" placeholder="Number" name="number" id="" />
        <br />
        <input type="password" placeholder="Password" name="password" id="" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputSubmit;
