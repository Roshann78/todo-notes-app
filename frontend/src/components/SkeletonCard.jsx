const SkeletonCard = ({ lines = 3 }) => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-line skeleton-title"></div>
      <div className="skeleton-body">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="skeleton-line" style={{ width: i === lines - 1 ? '70%' : '100%' }}></div>
        ))}
      </div>
      <div className="skeleton-line skeleton-footer"></div>
    </div>
  );
};

export default SkeletonCard;
