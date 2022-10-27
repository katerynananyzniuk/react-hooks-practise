import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Github Search
    </div>
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink to="/" end className="nav-link">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/about" className="nav-link">Info</NavLink>
    </li>
  </ul>
  </nav>
)