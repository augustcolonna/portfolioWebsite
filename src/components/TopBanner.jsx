

function TopBanner(props) {
  const { toggleTheme } = props;

  return (
    <div className="top-banner">
      <ul>
        <li>LinkedIn</li>
        <li>Git Hub</li>
        <li>Resume | CV</li>
      </ul>
      <button onClick={toggleTheme}>
       Toggle Theme
      </button>
    </div>
  );
}

export default TopBanner;
