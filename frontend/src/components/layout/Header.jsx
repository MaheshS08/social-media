"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Bell, MessageSquare, Search } from "lucide-react"
import "./Header.css"

function Header() {
  const { user } = useContext(AuthContext)

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <h1 className="logo">SocialApp</h1>
        </Link>
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="header-right">
        <Link to="/messages" className="icon-button">
          <MessageSquare size={20} />
        </Link>
        <Link to="/notifications" className="icon-button">
          <Bell size={20} />
        </Link>
        <Link to="/profile" className="user-profile">
          <img src={user?.profilePic || "/placeholder.svg"} alt={user?.name} className="profile-pic" />
        </Link>
      </div>
    </header>
  )
}

export default Header
