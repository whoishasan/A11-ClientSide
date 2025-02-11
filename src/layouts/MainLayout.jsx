import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <nav className="w-full fixed justify-center flex z-[999999] border-b">
        <Navbar />
      </nav>
      <div className="flex w-full py-10"></div>
      <div className="py-5">
        <div className="w-11/12 mx-auto max-w-6xl">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
