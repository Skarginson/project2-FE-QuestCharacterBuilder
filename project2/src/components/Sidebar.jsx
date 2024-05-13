import { Link } from "react-router-dom";

function Sidebar() {
  const handleViewSidebar = () => {
    setSideBarClose(!sidebarOpen);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebarFlex">
          <Link to="/About">About the project</Link>
          <Link to="/Rules">About the page</Link>
        </div>
        <button>A</button>
      </div>
    </>
  );
}

export default Sidebar;
