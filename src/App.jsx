import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./page/Home";
import { Cart } from "./page/Cart";
import Login from "./page/login";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path:'/login',
          element:<Login/>
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor:'#02343F',
            color:' #F0EDCC',
          },
        }}
      />
    </>
  );
  
}

export default App;
