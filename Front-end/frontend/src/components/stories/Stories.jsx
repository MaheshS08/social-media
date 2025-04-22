import "./Stories.css"

function Stories() {
  // Mock data for stories
  const stories = [
    { id: 1, user: { name: "Your Story", profilePic: "/placeholder.svg" }, isYourStory: true },
    { id: 2, user: { name: "John Doe", profilePic: "/placeholder.svg" } },
    { id: 3, user: { name: "Jane Smith", profilePic: "/placeholder.svg" } },
    { id: 4, user: { name: "Mike Johnson", profilePic: "/placeholder.svg" } },
    { id: 5, user: { name: "Sarah Williams", profilePic: "/placeholder.svg" } },
    { id: 6, user: { name: "Alex Brown", profilePic: "/placeholder.svg" } },
    { id: 7, user: { name: "Emily Davis", profilePic: "/placeholder.svg" } },
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

export default Stories
