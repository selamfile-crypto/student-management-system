import { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    systemName: "Student Management System",
    institution: "University",
    academicYear: "2026/2027",
    language: "English",
    emailNotifications: true,
    attendanceNotifications: true,
    showDashboardStats: true,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings({
      ...settings,
      [name]: value,
    });

    setSaved(false);
  };

  const handleToggle = (name) => {
    setSettings({
      ...settings,
      [name]: !settings[name],
    });

    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <section className="page settings-page">

      <div className="page-header">

        <div>
          <p className="eyebrow">
            SYSTEM MANAGEMENT
          </p>

          <h1>
            Settings
          </h1>

          <p className="page-description">
            Manage your system preferences and application settings.
          </p>
        </div>

      </div>


      <form
        className="settings-management-box"
        onSubmit={handleSave}
      >

        {/* =========================================
            GENERAL SETTINGS
        ========================================= */}

        <div className="settings-section">

          <div className="settings-section-header">

            <div>
              <p className="panel-label">
                GENERAL SETTINGS
              </p>

              <h2>
                System Information
              </h2>

              <p>
                Configure the basic information displayed throughout
                the management system.
              </p>
            </div>

            <div className="settings-icon">
              ⚙
            </div>

          </div>


          <div className="settings-form-grid">

            <div className="settings-field">

              <label>
                System Name
              </label>

              <input
                type="text"
                name="systemName"
                value={settings.systemName}
                onChange={handleChange}
              />

            </div>


            <div className="settings-field">

              <label>
                Institution Name
              </label>

              <input
                type="text"
                name="institution"
                value={settings.institution}
                onChange={handleChange}
              />

            </div>


            <div className="settings-field">

              <label>
                Academic Year
              </label>

              <select
                name="academicYear"
                value={settings.academicYear}
                onChange={handleChange}
              >

                <option value="2025/2026">
                  2025/2026
                </option>

                <option value="2026/2027">
                  2026/2027
                </option>

                <option value="2027/2028">
                  2027/2028
                </option>

              </select>

            </div>


            <div className="settings-field">

              <label>
                Language
              </label>

              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
              >

                <option value="English">
                  English
                </option>

                <option value="Amharic">
                  Amharic
                </option>

              </select>

            </div>

          </div>

        </div>


        {/* =========================================
            NOTIFICATIONS
        ========================================= */}

        <div className="settings-section">

          <div className="settings-section-header">

            <div>
              <p className="panel-label">
                NOTIFICATIONS
              </p>

              <h2>
                Notification Preferences
              </h2>

              <p>
                Choose which system notifications should be enabled.
              </p>
            </div>

            <div className="settings-icon">
              ◉
            </div>

          </div>


          <div className="settings-options">

            <div className="settings-option">

              <div>

                <strong>
                  Email Notifications
                </strong>

                <span>
                  Receive important system updates by email.
                </span>

              </div>


              <button
                type="button"
                className={
                  settings.emailNotifications
                    ? "settings-toggle active"
                    : "settings-toggle"
                }
                onClick={() =>
                  handleToggle("emailNotifications")
                }
              >

                <span></span>

              </button>

            </div>


            <div className="settings-option">

              <div>

                <strong>
                  Attendance Notifications
                </strong>

                <span>
                  Receive notifications about attendance changes.
                </span>

              </div>


              <button
                type="button"
                className={
                  settings.attendanceNotifications
                    ? "settings-toggle active"
                    : "settings-toggle"
                }
                onClick={() =>
                  handleToggle("attendanceNotifications")
                }
              >

                <span></span>

              </button>

            </div>


            <div className="settings-option">

              <div>

                <strong>
                  Dashboard Statistics
                </strong>

                <span>
                  Display statistics and analytics on the dashboard.
                </span>

              </div>


              <button
                type="button"
                className={
                  settings.showDashboardStats
                    ? "settings-toggle active"
                    : "settings-toggle"
                }
                onClick={() =>
                  handleToggle("showDashboardStats")
                }
              >

                <span></span>

              </button>

            </div>

          </div>

        </div>


        {/* =========================================
            SYSTEM STATUS
        ========================================= */}

        <div className="settings-section">

          <div className="settings-section-header">

            <div>
              <p className="panel-label">
                SYSTEM STATUS
              </p>

              <h2>
                Application Status
              </h2>

              <p>
                Current status of your student management system.
              </p>
            </div>

            <div className="settings-status">
              <span></span>
              ONLINE
            </div>

          </div>


          <div className="system-status-grid">

            <div className="system-status-item">

              <span>
                Database
              </span>

              <strong>
                Connected
              </strong>

            </div>


            <div className="system-status-item">

              <span>
                Application
              </span>

              <strong>
                Running
              </strong>

            </div>


            <div className="system-status-item">

              <span>
                Data Mode
              </span>

              <strong>
                Local
              </strong>

            </div>


            <div className="system-status-item">

              <span>
                Version
              </span>

              <strong>
                1.0.0
              </strong>

            </div>

          </div>

        </div>


        {/* =========================================
            SAVE AREA
        ========================================= */}

        <div className="settings-actions">

          <div>

            {saved && (
              <span className="settings-saved">
                ✓ Settings saved successfully
              </span>
            )}

          </div>


          <button
            type="submit"
            className="create-button"
          >
            Save Changes
          </button>

        </div>

      </form>

    </section>
  );
}

export default Settings;

