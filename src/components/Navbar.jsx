function Navbar() {
  return (
    <header className="topbar">
      <div className="mobile-logo">STUDENT HUB</div>

      <div className="search-box">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search students, courses..."
        />
      </div>

      <div className="top-actions">
        <button className="icon-button">⌕</button>

        <button className="icon-button notification">
          ♧
          <span></span>
        </button>

        <div className="profile">
          <div className="avatar">SA</div>

          <div className="profile-info">
            <strong>Administrator</strong>
            <small>Admin Account</small>
          </div>

          <span className="arrow">⌄</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;