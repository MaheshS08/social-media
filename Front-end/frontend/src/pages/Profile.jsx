"use client"

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import MobileNavigation from "../components/layout/MobileNavigation"

function Profile() {
  const { user } = useContext(AuthContext)

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="content">
          <div
            className="profile-container"
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <img
                src={user.profilePic || "/placeholder.svg"}
                alt={user.name}
                style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: "20px" }}
              />
              <div>
                <h1 style={{ margin: "0 0 5px 0" }}>{user.name}</h1>
                <p style={{ margin: "0", color: "#65676b" }}>@{user.username}</p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #e4e6eb", paddingTop: "20px" }}>
              <h2>About</h2>
              <p>This is your profile page. You can add your bio and other information here.</p>
            </div>
          </div>
        </main>
      </div>
      <MobileNavigation />
    </div>
  )
}

export default Profile
