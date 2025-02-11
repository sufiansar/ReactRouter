import { useLoaderData } from "react-router-dom";

const ShowDetailes = () => {
  const postall = useLoaderData();
  const { id, title, body } = postall;

  return (
    <div className="mx-96 bg-sky-300 flex items-center justify-center p-3 rounded-3xl">
      <div className="">
        <div>
          <h1>Hey developer{title}</h1>
          <h1>{id}</h1>
          <h1>{body}</h1>
        </div>
      </div>
    </div>
  );
};
export default ShowDetailes;
