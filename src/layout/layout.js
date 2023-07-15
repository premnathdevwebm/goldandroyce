import { Outlet } from "react-router-dom";
import Header from "../componenets/Header/Header";
function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
