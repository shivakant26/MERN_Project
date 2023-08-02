import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
