import { Link } from "react-router-dom";

const SinglePost = ({ singlePost }) => {
  const { title, body, id } = singlePost;
  return (
    <div className="bg-sky-300 p-3 rounded-3xl flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <h1>{body}</h1>
      </div>
      <div>
        <Link
          to={`/post/${id}`}
          className="bg-green-500 font-semibold btn p-2 rounded-3xl"
        >
          ShowDetails
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
