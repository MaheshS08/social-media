import Header from "../components/layout/Header"
import MobileNavigation from "../components/layout/MobileNavigation"
import MessagesComponent from "../components/messages/MessagesComponent"

function Messages() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <main className="content">
          <MessagesComponent />
        </main>
      </div>
      <MobileNavigation />
    </div>
  )
}

export default Messages
