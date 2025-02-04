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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contract"
          element={
            <Contract>
              <Route path="/inputpage" element={<InputPage />} />
            </Contract>
          }
        />
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
