import { useLoaderData } from "react-router-dom";
import SinglePost from "./SinglePost";

const Posts = () => {
  const post = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-10 mx-10">
      {post.map((singlePost) => (
        <SinglePost key={singlePost.id} singlePost={singlePost} />
      ))}
    </div>
  );
};

export default Posts;
