function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/About">About the project</Link>
        <Link to="/Rules">About the page</Link>
        <button>Open</button>
      </div>
    </>
  );
}

export default Sidebar;
