import { Link, useLocation } from "react-router-dom"
import { Home, Users, PlusSquare, Bell, User } from "lucide-react"
import "./MobileNavigation.css"

function MobileNavigation() {
  const location = useLocation()

  return (
    <nav className="mobile-nav">
      <Link to="/" className={`mobile-nav-item ${location.pathname === "/" ? "active" : ""}`}>
        <Home size={24} />
      </Link>
      <button className="mobile-nav-item">
        <Users size={24} />
      </button>
      <button className="mobile-nav-item create-button">
        <PlusSquare size={24} />
      </button>
      <Link to="/notifications" className={`mobile-nav-item ${location.pathname === "/notifications" ? "active" : ""}`}>
        <Bell size={24} />
      </Link>
      <Link to="/profile" className={`mobile-nav-item ${location.pathname === "/profile" ? "active" : ""}`}>
        <User size={24} />
      </Link>
    </nav>
  )
}

export default MobileNavigation
