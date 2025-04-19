import Post from "./post"
import CreatePost from "./create-post"
import "./feed.css"

export default function Feed() {
  // Mock data for posts
  const posts = [
    {
      id: 1,
      user: {
        name: "John Doe",
        username: "johndoe",
        profilePic: "/placeholder.svg?height=40&width=40",
      },
      content: "Just finished a great hike today! The views were amazing. #nature #outdoors",
      image: "/placeholder.svg?height=500&width=500",
      likes: 124,
      comments: 23,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        username: "janesmith",
        profilePic: "/placeholder.svg?height=40&width=40",
      },
      content: "Excited to announce that I've started a new position at Acme Inc! #newjob #career",
      image: null,
      likes: 89,
      comments: 42,
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        username: "mikej",
        profilePic: "/placeholder.svg?height=40&width=40",
      },
      content: "Check out my new photography project! I've been working on this for weeks.",
      image: "/placeholder.svg?height=500&width=500",
      likes: 215,
      comments: 31,
      timeAgo: "1 day ago",
    },
  ]

  return (
    <div className="feed-container">
      <CreatePost />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
