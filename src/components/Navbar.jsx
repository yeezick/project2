import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-title" to="/">
        Boss Card
      </Link>
      <div className="linkbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/create">Create</Link>
        <Link className="nav-link" to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;