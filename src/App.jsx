import { Outlet } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StickyNavbar from "./components/StickyNavbar";
import Background from "./pages/Background";
import Awards from "./pages/Awards";
import Procure from "./pages/Procure";
import RiskManagement from "./pages/RiskManagement";
import AvailableJobs from "./pages/AvailableJobs";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div>
          <StickyNavbar/>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/background",
          element: <Background />,
        },
        {
          path: "/awards",
          element: <Awards />,
        },
        {
          path: "/procure-to-pay",
          element: <Procure />,
        },
        {
          path: "/risk-management",
          element: <RiskManagement />,
        },
        {
          path: "/available-jobs",
          element: <AvailableJobs />,
        },
        {
          path: "/clients",
          element: <Clients />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/faqs",
          element: <FAQs />,
        },
      ],
    },
    {
      path:"/login",
      element: <Login/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
