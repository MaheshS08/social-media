import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import MobileNavigation from "../components/layout/MobileNavigation"
import Stories from "../components/stories/Stories"
import Feed from "../components/feed/Feed"

function Home() {
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

export default Home
