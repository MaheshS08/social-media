import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import MobileNavigation from "../components/layout/MobileNavigation"
import Inbox from "../components/inbox/Inbox"

function Notifications() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="content">
          <Inbox />
        </main>
      </div>
      <MobileNavigation />
    </div>
  )
}

export default Notifications
