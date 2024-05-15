import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  return (
    <>
      <div className={!isSidebarOpened ? "sidebarClosed" : "sidebarOpen"}>
        <div className="sidebarFlex">
          <Link to="/About">About the project</Link>
          <Link to="/Rules">About the page</Link>
        </div>
        <button
          onClick={() =>
            !isSidebarOpened
              ? setIsSidebarOpened(true)
              : setIsSidebarOpened(false)
          }
        ></button>
      </div>
    </>
  );
}

export default Sidebar;
