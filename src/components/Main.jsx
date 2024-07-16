import "./styles/main.css";
import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Sidebar from "./Sidebar";
function Main() {
  return (
    <>
      <div>
        <div>
          <Nav />
          <div className="main">
            <Sidebar />
            <div className="item-container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
