function Schedule() {
  return (
    <div className="panel schedule-panel">
      <div className="panel-header">
        <div>
          <p className="panel-label">TODAY</p>
          <h3>Upcoming Classes</h3>
        </div>

        <button className="view-button">View Schedule</button>
      </div>

      <div className="class-list">
        <div className="class-item">
          <div className="time">
            <strong>08:00</strong>
            <span>AM</span>
          </div>

          <div className="class-line"></div>

          <div className="class-info">
            <strong>Data Structures</strong>
            <span>Computer Science • Room 204</span>
          </div>

          <div className="class-tag">CS</div>
        </div>

        <div className="class-item">
          <div className="time">
            <strong>10:30</strong>
            <span>AM</span>
          </div>

          <div className="class-line"></div>

          <div className="class-info">
            <strong>Database Systems</strong>
            <span>Software Engineering • Room 108</span>
          </div>

          <div className="class-tag">DB</div>
        </div>

        <div className="class-item">
          <div className="time">
            <strong>02:00</strong>
            <span>PM</span>
          </div>

          <div className="class-line"></div>

          <div className="class-info">
            <strong>Web Development</strong>
            <span>Information Technology • Lab 02</span>
          </div>

          <div className="class-tag">WD</div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;