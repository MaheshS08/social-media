import { Home, Users, PlusSquare, Bell, Menu } from "lucide-react"
import "./mobile-navigation.css"

export default function MobileNavigation() {
  return (
    <nav className="mobile-nav">
      <button className="mobile-nav-item">
        <Home size={24} />
      </button>
      <button className="mobile-nav-item">
        <Users size={24} />
      </button>
      <button className="mobile-nav-item create-button">
        <PlusSquare size={24} />
      </button>
      <button className="mobile-nav-item">
        <Bell size={24} />
      </button>
      <button className="mobile-nav-item">
        <Menu size={24} />
      </button>
    </nav>
  )
}
