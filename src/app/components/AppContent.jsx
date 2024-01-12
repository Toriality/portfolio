import MouseTrail from "./MouseTrail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/home";
import NotFound from "@/pages/404";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Wild from "@/pages/wild";

import bg from "@/assets/bg_1.jpg";

import { useTheme } from "@/app/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/wild",
    element: <Wild />,
  },
]);

export default function AppContent() {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={`transition-colors duration-300 ease-in-out ${
        isDarkTheme ? "dark" : "light"
      } text-white relative snap-y snap-mandatory h-screen overflow-y-scroll bg-gray-900 bg-blend-multiply`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundImage: `url(${bg})`,
      }}
    >
      <RouterProvider router={router} />
      <MouseTrail />
    </div>
  );
}
