"use client"

import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("socialAppUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (username, password) => {
    // Mock login functionality
    // In a real app, this would make an API call to authenticate
    const mockUser = {
      id: 1,
      name: "Demo User",
      username: username,
      email: "demo@example.com",
      profilePic: "/placeholder.svg?height=40&width=40",
      publicAddress: "0x1234...5678",
    }

    setUser(mockUser)
    localStorage.setItem("socialAppUser", JSON.stringify(mockUser))
  }

  const register = (name, username, email, password) => {
    // Mock register functionality
    const mockUser = {
      id: 1,
      name: name,
      username: username,
      email: email,
      profilePic: "/placeholder.svg?height=40&width=40",
      publicAddress: "0x1234...5678",
    }

    setUser(mockUser)
    localStorage.setItem("socialAppUser", JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("socialAppUser")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, loading }}>{children}</AuthContext.Provider>
}
