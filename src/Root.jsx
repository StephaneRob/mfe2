import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

export default function Root() {
  return (
    <div style={{ padding: "100px", backgroundColor: "#ff8787" }}>
      <RouterProvider
        router={createBrowserRouter([
          { path: ":lang/mfe2", element: <Home /> },
          { path: ":lang/mfe2/settings", element: <Settings /> },
        ])}
      ></RouterProvider>
    </div>
  );
}
