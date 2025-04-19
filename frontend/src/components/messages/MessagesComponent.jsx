"use client"

import { useState } from "react"
import { Search, Send } from "lucide-react"
import "./MessagesComponent.css"

function MessagesComponent() {
  const [activeChat, setActiveChat] = useState(null)
  const [messageText, setMessageText] = useState("")

  // Mock data for chats
  const chats = [
    {
      id: 1,
      user: {
        name: "John Doe",
        profilePic: "/placeholder.svg",
        online: true,
      },
      lastMessage: {
        text: "Hey, how are you doing?",
        time: "2:30 PM",
        unread: true,
      },
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        profilePic: "/placeholder.svg",
        online: false,
      },
      lastMessage: {
        text: "Let me know when you're free",
        time: "Yesterday",
        unread: false,
      },
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        profilePic: "/placeholder.svg",
        online: true,
      },
      lastMessage: {
        text: "The meeting is scheduled for tomorrow",
        time: "Yesterday",
        unread: false,
      },
    },
  ]

  // Mock data for messages in active chat
  const messages = [
    {
      id: 1,
      sender: "other",
      text: "Hey there! How are you?",
      time: "2:25 PM",
    },
    {
      id: 2,
      sender: "me",
      text: "I'm good, thanks! How about you?",
      time: "2:26 PM",
    },
    {
      id: 3,
      sender: "other",
      text: "Doing well! Just wanted to check in. Are you coming to the event this weekend?",
      time: "2:28 PM",
    },
    {
      id: 4,
      sender: "me",
      text: "Yes, I'm planning to be there. What time does it start?",
      time: "2:30 PM",
    },
  ]

  const handleSendMessage = (e) => {
    e.preventDefault()
    // Handle sending message
    console.log("Sending message:", messageText)
    setMessageText("")
  }

  return (
    <div className="messages-container">
      <div className="chats-sidebar">
        <div className="chats-header">
          <h2>Messages</h2>
        </div>

        <div className="chats-search">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search messages" />
        </div>

        <div className="chats-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${activeChat === chat.id ? "active" : ""} ${chat.lastMessage.unread ? "unread" : ""}`}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className="chat-avatar">
                <img src={chat.user.profilePic || "/placeholder.svg"} alt={chat.user.name} />
                {chat.user.online && <span className="online-indicator"></span>}
              </div>

              <div className="chat-info">
                <div className="chat-header">
                  <h3>{chat.user.name}</h3>
                  <span className="chat-time">{chat.lastMessage.time}</span>
                </div>
                <p className="chat-last-message">{chat.lastMessage.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-content">
        {activeChat ? (
          <>
            <div className="chat-header">
              <div className="chat-user">
                <img
                  src={chats.find((c) => c.id === activeChat)?.user.profilePic || "/placeholder.svg"}
                  alt={chats.find((c) => c.id === activeChat)?.user.name}
                />
                <div>
                  <h3>{chats.find((c) => c.id === activeChat)?.user.name}</h3>
                  <span className="user-status">
                    {chats.find((c) => c.id === activeChat)?.user.online ? "Online" : "Offline"}
                  </span>
                </div>
              </div>
            </div>

            <div className="messages-list">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender === "me" ? "sent" : "received"}`}>
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <form className="message-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <button type="submit" className="send-button" disabled={!messageText.trim()}>
                <Send size={20} />
              </button>
            </form>
          </>
        ) : (
          <div className="no-chat-selected">
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessagesComponent
