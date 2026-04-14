const EmptyState = ({ icon, heading, subtext }) => {
  return (
    <div className="empty-state-wrapper">
      <div className="empty-icon">{icon}</div>
      <h3 className="empty-heading">{heading}</h3>
      {subtext && <p className="empty-subtext">{subtext}</p>}
    </div>
  );
};

export default EmptyState;
