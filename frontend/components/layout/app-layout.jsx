"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/auth-context"
import Login from "@/components/auth/login"
import Header from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"
import Feed from "@/components/feed/feed"
import Stories from "@/components/stories/stories"
import MobileNavigation from "@/components/layout/mobile-navigation"
import "./app-layout.css"

export default function AppLayout() {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Login />
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="content">
          <Stories />
          <Feed />
        </main>
      </div>
      <MobileNavigation />
    </div>
  )
}
