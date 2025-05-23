"use client"

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext)

  const token = sessionStorage.getItem("token");
  console.log(token)

  if (loading) {
    return <div>Loading...</div>
  }

  if (!token) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute
