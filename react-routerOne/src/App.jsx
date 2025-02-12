// import "./App.css";
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";

// import About from "./pages/About";
// import Profile from "./pages/Profile";
// import Setting from "./pages/Setting"; // Fixed incorrect import
// import RootLayout from "./Layout/RootLayout";
// import MassagePage from "./pages/MassagePage";
// import InputPage from "./pages/InputPage";

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<RootLayout />}>
//         <Route path="/" element={<>Home</>} />
//         <Route path="/about" element={<About />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="/massage" element={<MassagePage />} />
//           {/* <Route path="input" element={<InputPage></InputPage>} /> */}
//           <Route path="settings" element={<Setting />} />
//         </Route>
//         <Route path="/contact" element={<>Contact</>} />
//       </Route>
//     )
//   );
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet, // Import Outlet for nested routes
} from "react-router-dom";

import About from "./pages/About";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import RootLayout from "./Layout/RootLayout";
import MassagePage from "./pages/MassagePage";
import InputPage from "./pages/InputPage";
import User from "./pages/User";
import DataLoader from "./pages/DataLoader";
import SingleUser from "./pages/SingleUser/SingleUser";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<>Home</>} />
        <Route path="/singleuser" element={<SingleUser />} />
        <Route path="/about" element={<About />}>
          <Route path="profile" element={<Profile />} />
          <Route path="massage" element={<MassagePage />} />

          <Route path="input" element={<InputPage />} />

          <Route
            loader={async () => {
              const response = await fetch(
                `https://jsonplaceholder.typicode.com/users`
              );
              return response.json();
            }}
            path="user"
            element={<DataLoader />}
          />

          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="/contact" element={<>Contact</>} />
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
