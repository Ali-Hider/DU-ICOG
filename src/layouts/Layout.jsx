import Header from "../components/Header";
import NavHead from "../components/Navhead";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/Scrolltotop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <NavHead />

      {/* Pages will render here */}
        <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
