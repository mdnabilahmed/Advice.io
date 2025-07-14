import React, { useState } from "react";

const Dashboard = () => {
  // Example state for sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Welcome to your dashboard!", read: false },
    { id: 2, message: "You have 3 new messages.", read: false },
  ]);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <div className={theme === "dark" ? "dashboard dark" : "dashboard"}>
      {/* Header */}
      <header className="dashboard-header" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1rem", background: theme === "dark" ? "#222" : "#f5f5f5"
      }}>
        <button onClick={toggleSidebar} style={{ fontSize: 20 }}>☰</button>
        <h1>Dashboard</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <div style={{ position: "relative" }}>
            <button onClick={markAllRead}>🔔</button>
            {notifications.some((n) => !n.read) && (
              <span style={{
                position: "absolute", top: 0, right: 0, background: "red",
                color: "#fff", borderRadius: "50%", fontSize: 10, padding: "2px 6px"
              }}>
                {notifications.filter((n) => !n.read).length}
              </span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <button onClick={() => setProfileMenuOpen((v) => !v)}>👤</button>
            {profileMenuOpen && (
              <div style={{
                position: "absolute", right: 0, top: "2rem", background: "#fff",
                border: "1px solid #ccc", borderRadius: 4, boxShadow: "0 2px 8px #0002",
                minWidth: 120, zIndex: 10
              }}>
                <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Profile</div>
                <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Settings</div>
                <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Layout */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 64px)" }}>
        {/* Sidebar */}
        {sidebarOpen && (
          <aside style={{
            width: 220, background: theme === "dark" ? "#181818" : "#fff",
            borderRight: "1px solid #eee", padding: "1rem", transition: "width 0.2s"
          }}>
            <nav>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li><a href="#" style={{ textDecoration: "none" }}>🏠 Home</a></li>
                <li><a href="#" style={{ textDecoration: "none" }}>📊 Analytics</a></li>
                <li><a href="#" style={{ textDecoration: "none" }}>💬 Messages</a></li>
                <li><a href="#" style={{ textDecoration: "none" }}>⚙️ Settings</a></li>
              </ul>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main style={{
          flex: 1, padding: "2rem", background: theme === "dark" ? "#222" : "#fafbfc",
          transition: "background 0.2s"
        }}>
          {/* Widgets */}
          <section style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <div style={{
              flex: 1, background: "#fff", borderRadius: 8, padding: "1rem",
              boxShadow: "0 2px 8px #0001"
            }}>
              <h2>Users</h2>
              <p>1,234</p>
            </div>
            <div style={{
              flex: 1, background: "#fff", borderRadius: 8, padding: "1rem",
              boxShadow: "0 2px 8px #0001"
            }}>
              <h2>Revenue</h2>
              <p>$12,345</p>
            </div>
            <div style={{
              flex: 1, background: "#fff", borderRadius: 8, padding: "1rem",
              boxShadow: "0 2px 8px #0001"
            }}>
              <h2>Performance</h2>
              <p>98%</p>
            </div>
          </section>

          {/* Chart Example */}
          <section style={{
            background: "#fff", borderRadius: 8, padding: "2rem",
            boxShadow: "0 2px 8px #0001", marginBottom: "2rem"
          }}>
            <h2>Analytics Overview</h2>
            <div style={{
              width: "100%", height: 200, background: "#f0f0f0",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#aaa", fontSize: 24, borderRadius: 8
            }}>
              {/* Placeholder for chart */}
              [Chart.js or Recharts here]
            </div>
          </section>

          {/* Table Example */}
          <section style={{
            background: "#fff", borderRadius: 8, padding: "2rem",
            boxShadow: "0 2px 8px #0001"
          }}>
            <h2>Recent Activity</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: "0.5rem" }}>User</th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: "0.5rem" }}>Action</th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: "0.5rem" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.5rem" }}>Alice</td>
                  <td style={{ padding: "0.5rem" }}>Logged in</td>
                  <td style={{ padding: "0.5rem" }}>2024-06-01</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.5rem" }}>Bob</td>
                  <td style={{ padding: "0.5rem" }}>Uploaded a file</td>
                  <td style={{ padding: "0.5rem" }}>2024-06-01</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.5rem" }}>Carol</td>
                  <td style={{ padding: "0.5rem" }}>Updated profile</td>
                  <td style={{ padding: "0.5rem" }}>2024-05-31</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>

      {/* Simple styles */}
      <style>{`
        .dashboard.dark {
          background: #181818;
          color: #fff;
        }
        .dashboard.dark .dashboard-header {
          background: #222;
        }
        .dashboard.dark aside {
          background: #181818;
          color: #fff;
        }
        .dashboard.dark main {
          background: #222;
        }
        a { color: inherit; }
        a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
};

export default Dashboard;
