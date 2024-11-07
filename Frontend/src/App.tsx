import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <HereSection />,
    //   },
    //   {
    //     path: "/profile",
    //     element: <Profile />,
    //   },
    //   {
    //     path: "/search/:text",
    //     element: <SearchPage />,
    //   },
    //   {
    //     path: "/restaurant/:id",
    //     element: <RestaurantDetail />,
    //   },
    //   {
    //     path: "/cart",
    //     element: <Cart />,
    //   },
    //   {
    //     path: "/order/status",
    //     element: <Success />,
    //   },
    //   // admin services start from here
    //   {
    //     path: "/admin/restaurant",
    //     element: (
    //       <AdminRoute>
    //         <Restaurant />
    //       </AdminRoute>
    //     ),
    //   },
    //   {
    //     path: "/admin/menu",
    //     element: (
    //       <AdminRoute>
    //         <AddMenu />
    //       </AdminRoute>
    //     ),
    //   },
    //   {
    //     path: "/admin/orders",
    //     element: (
    //       <AdminRoute>
    //         <Orders />
    //       </AdminRoute>
    //     ),
    //   },
    // ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },

  // {
  //   path: "/reset-password",
  //   element: <ResetPassword />,
  // },
  // {
  //   path: "/verify-email",
  //   element: <VerifyEmail />,
  // },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
