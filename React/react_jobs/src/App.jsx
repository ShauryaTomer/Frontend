import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      {/*it creates a router to a path using the element h1 here, but it can be any component */}
      <Route path="/jobs" element={<JobsPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />{" "}
      {/* Now instead of passing individual components we are passing a router provider that points to those components*/}
    </>
  );
};

export default App;
