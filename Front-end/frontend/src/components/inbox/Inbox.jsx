import { Bell, Settings, Trash2 } from "lucide-react"
import "./Inbox.css"

function Inbox() {
  // Mock data for notifications
  const notifications = [
    {
      id: 1,
      type: "like",
      user: {
        name: "John Doe",
        profilePic: "/placeholder.svg",
      },
      content: "liked your post",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "comment",
      user: {
        name: "Jane Smith",
        profilePic: "/placeholder.svg",
      },
      content: "commented on your photo",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "friend",
      user: {
        name: "Mike Johnson",
        profilePic: "/placeholder.svg",
      },
      content: "sent you a friend request",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      type: "mention",
      user: {
        name: "Sarah Williams",
        profilePic: "/placeholder.svg",
      },
      content: "mentioned you in a comment",
      time: "2 days ago",
      read: true,
    },
  ]

  return (
    <div className="inbox-container">
      <div className="inbox-header">
        <h2>Notifications</h2>
        <div className="inbox-actions">
          <button className="inbox-action-button">
            <Settings size={18} />
          </button>
          <button className="inbox-action-button">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className={`notification-item ${!notification.read ? "unread" : ""}`}>
            <div className="notification-icon">
              <Bell size={16} />
            </div>
            <div className="notification-avatar">
              <img src={notification.user.profilePic || "/placeholder.svg"} alt={notification.user.name} />
            </div>
            <div className="notification-content">
              <p>
                <strong>{notification.user.name}</strong> {notification.content}
              </p>
              <span className="notification-time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inbox
