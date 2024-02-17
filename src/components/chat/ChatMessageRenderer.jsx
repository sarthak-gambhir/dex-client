import "./ChatMessageRenderer.scss";

const ChatMessageRenderer = (message) => {
  return (
    <div className="chat-message-content">
      <h6>{message?.socketId}</h6>
      <p>{message?.data?.content}</p>
    </div>
  );
};

export default ChatMessageRenderer;
