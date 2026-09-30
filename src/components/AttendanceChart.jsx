function AttendanceChart() {
  return (
    <div className="panel attendance-panel">
      <div className="panel-header">
        <div>
          <p className="panel-label">OVERVIEW</p>
          <h3>Attendance Analytics</h3>
        </div>

        <select>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="chart-area">
        <div className="chart-y">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        <div className="chart">
          <div className="grid-line line-1"></div>
          <div className="grid-line line-2"></div>
          <div className="grid-line line-3"></div>
          <div className="grid-line line-4"></div>

          <div className="bars">
            <div className="bar-wrapper">
              <div className="bar" style={{ height: "72%" }}></div>
              <span>Mon</span>
            </div>

            <div className="bar-wrapper">
              <div className="bar" style={{ height: "88%" }}></div>
              <span>Tue</span>
            </div>

            <div className="bar-wrapper">
              <div className="bar" style={{ height: "76%" }}></div>
              <span>Wed</span>
            </div>

            <div className="bar-wrapper">
              <div className="bar highlight" style={{ height: "94%" }}></div>
              <span>Thu</span>
            </div>

            <div className="bar-wrapper">
              <div className="bar" style={{ height: "84%" }}></div>
              <span>Fri</span>
            </div>

            <div className="bar-wrapper">
              <div className="bar" style={{ height: "68%" }}></div>
              <span>Sat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceChart;