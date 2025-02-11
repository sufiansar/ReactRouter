import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./components/Pages/Home";
import Contract from "./components/Pages/Contract";
import About from "./components/Pages/About";
import InputPage from "./components/Pages/InputPage";
import Posts from "./Posts/Posts";
import ShowDetailes from "./Posts/ShowDetailes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          loader={async () => {
            const res = await fetch(
              `https://jsonplaceholder.typicode.com/posts`
            );
            return res.json();
          }}
          path="/posts"
          element={<Posts />}
        ></Route>
        <Route
          path="/post/:postId"
          loader={async ({ params }) => {
            const res = await fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
            return res.json();
          }}
          element={<ShowDetailes />}
        />

        <Route path="/about" element={<About />} />

        <Route path="contract" element={<Contract />}>
          <Route path="inputpage" element={<InputPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
