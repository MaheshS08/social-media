import "./stories.css"

export default function Stories() {
  // Mock data for stories
  const stories = [
    { id: 1, user: { name: "Your Story", profilePic: "/placeholder.svg?height=60&width=60" }, isYourStory: true },
    { id: 2, user: { name: "John Doe", profilePic: "/placeholder.svg?height=60&width=60" } },
    { id: 3, user: { name: "Jane Smith", profilePic: "/placeholder.svg?height=60&width=60" } },
    { id: 4, user: { name: "Mike Johnson", profilePic: "/placeholder.svg?height=60&width=60" } },
    { id: 5, user: { name: "Sarah Williams", profilePic: "/placeholder.svg?height=60&width=60" } },
    { id: 6, user: { name: "Alex Brown", profilePic: "/placeholder.svg?height=60&width=60" } },
    { id: 7, user: { name: "Emily Davis", profilePic: "/placeholder.svg?height=60&width=60" } },
  ]

  return (
    <div className="stories-container">
      <div className="stories-list">
        {stories.map((story) => (
          <div key={story.id} className="story-item">
            <div className={`story-avatar ${story.isYourStory ? "your-story" : ""}`}>
              <img src={story.user.profilePic || "/placeholder.svg"} alt={story.user.name} />
              {story.isYourStory && <span className="add-story-icon">+</span>}
            </div>
            <span className="story-username">{story.user.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
