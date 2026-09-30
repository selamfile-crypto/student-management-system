function StudentPerformance() {
  return (
    <div className="panel performance-panel">
      <div className="panel-header">
        <div>
          <p className="panel-label">PERFORMANCE</p>
          <h3>Student Performance</h3>
        </div>
      </div>

      <div className="performance">
        <div className="circle">
          <div>
            <strong>87%</strong>
            <span>Average</span>
          </div>
        </div>

        <div className="performance-info">
          <div>
            <span className="dot yellow"></span>
            Excellent
            <strong>42%</strong>
          </div>

          <div>
            <span className="dot blue"></span>
            Good
            <strong>35%</strong>
          </div>

          <div>
            <span className="dot gray"></span>
            Needs Support
            <strong>23%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPerformance;