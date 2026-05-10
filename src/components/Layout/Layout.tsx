import { Outlet } from "react-router-dom";
import Header from "./../Header/Header";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />

      <div className="content-container">
        {/* <aside className="ad-space left-ad">
          <span>ADVERTISEMENT</span>
        </aside> */}

        <main className="main-content">
          <Outlet />
        </main>

        {/* <aside className="ad-space right-ad">
          <span>ADVERTISEMENT</span>
        </aside> */}
      </div>
    </div>
  );
};

export default Layout;
