function PortalCard({
  title,
  description,
  features,
  onSelect,
  isLoggedIn
}) {
  const handleClick = () => {
    if (isLoggedIn) {
      onSelect(title);
    } else {
      alert("Please login first.");
      document.getElementById("login").scrollIntoView();
    }
  };

  return (
    <div className="portal-card">
      <div className="portal-icon">🏫</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button onClick={handleClick}>
        {isLoggedIn ? "Open Portal" : "Login First"}
      </button>
    </div>
  );
}

export default PortalCard;