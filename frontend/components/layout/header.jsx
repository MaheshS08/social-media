"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/auth-context"
import { Bell, MessageSquare, Search } from "lucide-react"
import "./header.css"

export default function Header() {
  const { user } = useContext(AuthContext)

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">SocialApp</h1>
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-button">
          <MessageSquare size={20} />
        </button>
        <button className="icon-button">
          <Bell size={20} />
        </button>
        <div className="user-profile">
          <img src={user.profilePic || "/placeholder.svg?height=32&width=32"} alt={user.name} className="profile-pic" />
        </div>
      </div>
    </header>
  )
}
