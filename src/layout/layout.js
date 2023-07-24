import { Outlet } from "react-router-dom";
import Header from "componenets/Header/Header";
import VerticalNav from "componenets/VerticalNavigation/VerticalNav"
function Layout() {
  return (
    <>
      <Header />
      <VerticalNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
