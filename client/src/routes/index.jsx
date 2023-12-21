import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/features", element: <Features/>},
      {path: "/pricing", element: <Pricing />},
      {path: "/contact", element: <Contact />},
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {path: "/", element: <Dashboard />},
      {path: "/settings", element: <Settings />},
      {path: "/profile", element: <Profile />},
    ],
  }
]);

export default router;
