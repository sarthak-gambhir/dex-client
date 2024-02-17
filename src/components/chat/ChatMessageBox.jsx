import { useState } from "react";
import PropTypes from "prop-types";
import "./ChatMessageBox.scss";

const ChatMessageBox = ({ onSend = null }) => {
  const [messageContent, setMessageContent] = useState("");

  const handleSendMessage = () => {
    if (messageContent.length === 0) {
      return;
    }
    onSend(messageContent);
    setMessageContent("");
  };

  const handleInputKeyUpCapture = (e) => {
    if (e.shiftKey && e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-message-box">
      <input
        placeholder="Write something..."
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        onKeyUpCapture={handleInputKeyUpCapture}
      />
      <button type="button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

ChatMessageBox.propTypes = {
  onSend: PropTypes.func,
};

export default ChatMessageBox;
