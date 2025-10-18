import { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

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
          placeholder="Search for food spots..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login">Sign In</Link> 
      </div>
    </nav>
  );
}

export default NavBar;
