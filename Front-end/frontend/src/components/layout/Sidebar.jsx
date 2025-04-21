"use client"

import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Home, Users, Bookmark, Settings, MessageSquare, Bell, User } from "lucide-react"
import "./Sidebar.css"

function Sidebar() {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li className={`sidebar-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/" className="sidebar-link">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <Users size={20} />
              <span>Friends</span>
            </a>
          </li>
          <li className={`sidebar-item ${location.pathname === "/messages" ? "active" : ""}`}>
            <Link to="/messages" className="sidebar-link">
              <MessageSquare size={20} />
              <span>Messages</span>
            </Link>
          </li>
          <li className={`sidebar-item ${location.pathname === "/notifications" ? "active" : ""}`}>
            <Link to="/notifications" className="sidebar-link">
              <Bell size={20} />
              <span>Notifications</span>
            </Link>
          </li>
          <li className={`sidebar-item ${location.pathname === "/profile" ? "active" : ""}`}>
            <Link to="/profile" className="sidebar-link">
              <User size={20} />
              <span>Profile</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <Bookmark size={20} />
              <span>Saved</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <Settings size={20} />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="user-profile-sidebar">
        <img src={user?.profilePic || "/placeholder.svg"} alt={user?.name} className="profile-pic-sidebar" />
        <div className="user-info">
          <h3>{user?.name}</h3>
          <p>@{user?.username}</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
