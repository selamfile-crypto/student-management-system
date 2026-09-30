function StatCard({ icon, iconClass, growth, title, value, progress, description }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className={`stat-icon ${iconClass}`}>
          {icon}
        </div>

        <span className="growth">{growth}</span>
      </div>

      <p>{title}</p>

      <h2>{value}</h2>

      <div className="mini-line">
        <span style={{ width: progress }}></span>
      </div>

      <small>{description}</small>
    </div>
  );
}

export default StatCard;