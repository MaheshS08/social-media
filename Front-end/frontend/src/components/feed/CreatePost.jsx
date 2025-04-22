"use client"

import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { ImageIcon, Smile, MapPin } from "lucide-react"
import "./CreatePost.css"

function CreatePost() {
  const { user } = useContext(AuthContext)
  const [postText, setPostText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle post creation
    console.log("Creating post:", postText)
    setPostText("")
  }

  return (
    <div className="create-post">
      <div className="create-post-input">
        <img src={user?.profilePic || "/placeholder.svg"} alt={user?.name} className="user-pic" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What's on your mind?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <button type="submit" className="post-button" disabled={!postText.trim()}>
            Post
          </button>
        </form>
      </div>

      <div className="create-post-actions">
        <button className="create-post-action">
          <ImageIcon size={20} />
          <span>Photo</span>
        </button>
        <button className="create-post-action">
          <Smile size={20} />
          <span>Feeling</span>
        </button>
        <button className="create-post-action">
          <MapPin size={20} />
          <span>Check in</span>
        </button>
      </div>
    </div>
  )
}

export default CreatePost
