"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/auth-context"
import { Home, Users, Bookmark, Settings, MessageSquare } from "lucide-react"
import "./sidebar.css"

export default function Sidebar() {
  const { user } = useContext(AuthContext)

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item active">
            <a href="#" className="sidebar-link">
              <Home size={20} />
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <Users size={20} />
              <span>Friends</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <MessageSquare size={20} />
              <span>Messages</span>
            </a>
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
        <img
          src={user.profilePic || "/placeholder.svg?height=40&width=40"}
          alt={user.name}
          className="profile-pic-sidebar"
        />
        <div className="user-info">
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
        </div>
      </div>
    </aside>
  )
}
