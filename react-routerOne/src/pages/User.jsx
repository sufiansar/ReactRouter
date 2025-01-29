const User = ({ useral }) => {
  if (!useral) return <h1 className="text-red-500">User data not available</h1>;
  const { name, email } = useral;

  return (
    <div className="grid grid-cols-3 bg-sky-300 ml-5 p-4 mt-4 rounded-3xl">
      {/* <h1>hey</h1> */}
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default User;
