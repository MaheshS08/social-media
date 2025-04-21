"use client"
import axios from "axios"
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
 
   
  }

  const register = async (name, username, email, password) => {
    // Mock register functionality
    const mockUser = {
      id: 1,
      name: name,
      username: username,
      email: email,
      password: password
    };
    console.log("hello")

    const response = await axios.post("http://localhost:8090/register", mockUser);
    console.log(response);
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("socialAppUser")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, loading }}>{children}</AuthContext.Provider>
}
