import { Outlet } from "react-router-dom";
import Header from "componenets/Header/Header";
import Footer from "componenets/Footer/Footer";
import VerticalNav from "componenets/VerticalNavigation/VerticalNav"
function Layout() {
  return (
    <>
      <Header />
      <VerticalNav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Layout;
