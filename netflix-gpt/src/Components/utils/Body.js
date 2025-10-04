import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import First from "./First";
import { RouterProvider } from "react-router-dom";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <First />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
