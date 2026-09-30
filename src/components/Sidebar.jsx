import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">S</div>

        <div>
          <h2>STUDENT</h2>
          <span>MANAGEMENT</span>
        </div>
      </div>

      <nav className="menu">
        <p className="menu-title">MAIN MENU</p>

        <NavLink to="/dashboard" className="menu-item">
          <span>⌂</span>
          Dashboard
        </NavLink>

        <NavLink to="/students" className="menu-item">
          <span>♙</span>
          Students
        </NavLink>

        <NavLink to="/courses" className="menu-item">
          <span>▣</span>
          Courses
        </NavLink>

        <NavLink to="/teachers" className="menu-item">
          <span>♙</span>
          Teachers
        </NavLink>

        <NavLink to="/schedule" className="menu-item">
          <span>◷</span>
          Schedule
        </NavLink>

        <NavLink to="/attendance" className="menu-item">
          <span>◉</span>
          Attendance
        </NavLink>

        <p className="menu-title">MANAGEMENT</p>

        <NavLink to="/analytics" className="menu-item">
          <span>▥</span>
          Analytics
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <span>⚙</span>
          Settings
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="help-card">
          <div className="help-icon">?</div>

          <h4>Need Help?</h4>

          <p>Contact the administration team.</p>

          <button>Get Support</button>
        </div>

        <div className="logout">
          <span>↪</span>
          Logout
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;