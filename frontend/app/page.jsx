import { AuthProvider } from "@/context/auth-context"
import AppLayout from "@/components/layout/app-layout"
import "@/app/globals.css"

export default function App() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  )
}
