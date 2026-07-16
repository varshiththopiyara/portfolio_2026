import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import DynamicBar from "./components/DynamicBar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
      <DynamicBar />
      <Footer />
    </div>
  );
}

export default Layout;