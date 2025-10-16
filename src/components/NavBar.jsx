import { useState } from "react";
import { Link } from "react-router-dom"; // import Link
import "../css/Navbar.css";

function NavBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Sufrah Muscat</div>

      <form className="navbar-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search spots..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/spots">Spots</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Sign In / Sign Up</Link> {/* New link */}
      </div>
    </nav>
  );
}

export default NavBar;
