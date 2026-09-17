function Dashboard({ user, selectedPortal, onLogout }) {
  return (
    <section className="dashboard">
      <h2>Welcome to Campus Connect</h2>

      <p>
        Logged in as: <strong>{user}</strong>
      </p>

      {selectedPortal ? (
        <div className="selected-portal">
          <h3>{selectedPortal}</h3>
          <p>
            You have selected the {selectedPortal}.
          </p>

          <div className="dashboard-cards">
            <div>
              <h4>Notices</h4>
              <p>View important campus announcements.</p>
            </div>

            <div>
              <h4>Events</h4>
              <p>Check upcoming university events.</p>
            </div>

            <div>
              <h4>Profile</h4>
              <p>View and manage your profile.</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Please select a portal above.</p>
      )}

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </section>
  );
}

export default Dashboard;