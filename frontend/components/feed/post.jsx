"use client"

import { useState } from "react"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"
import "./post.css"

export default function Post({ post }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
    setLiked(!liked)
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <img src={post.user.profilePic || "/placeholder.svg"} alt={post.user.name} className="post-user-pic" />
          <div className="post-user-info">
            <h3>{post.user.name}</h3>
            <span className="post-time">{post.timeAgo}</span>
          </div>
        </div>
        <button className="post-more">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
        {post.image && (
          <div className="post-image-container">
            <img src={post.image || "/placeholder.svg"} alt="Post" className="post-image" />
          </div>
        )}
      </div>

      <div className="post-stats">
        <span>{likesCount} likes</span>
        <span>{post.comments} comments</span>
      </div>

      <div className="post-actions">
        <button className={`post-action-button ${liked ? "liked" : ""}`} onClick={handleLike}>
          <Heart size={20} />
          <span>Like</span>
        </button>
        <button className="post-action-button" onClick={() => setShowComments(!showComments)}>
          <MessageCircle size={20} />
          <span>Comment</span>
        </button>
        <button className="post-action-button">
          <Send size={20} />
          <span>Share</span>
        </button>
        <button className={`post-action-button ${saved ? "saved" : ""}`} onClick={() => setSaved(!saved)}>
          <Bookmark size={20} />
          <span>Save</span>
        </button>
      </div>

      {showComments && (
        <div className="post-comments">
          <div className="post-comment-input">
            <img src="/placeholder.svg?height=32&width=32" alt="Your profile" className="comment-user-pic" />
            <input type="text" placeholder="Write a comment..." />
          </div>

          <div className="comments-list">
            <div className="comment">
              <img src="/placeholder.svg?height=32&width=32" alt="User" className="comment-user-pic" />
              <div className="comment-content">
                <h4>Sarah Williams</h4>
                <p>This looks amazing! Where was this taken?</p>
                <div className="comment-actions">
                  <button>Like</button>
                  <button>Reply</button>
                  <span>2h</span>
                </div>
              </div>
            </div>

            <div className="comment">
              <img src="/placeholder.svg?height=32&width=32" alt="User" className="comment-user-pic" />
              <div className="comment-content">
                <h4>Alex Brown</h4>
                <p>Great post! Thanks for sharing.</p>
                <div className="comment-actions">
                  <button>Like</button>
                  <button>Reply</button>
                  <span>1h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
