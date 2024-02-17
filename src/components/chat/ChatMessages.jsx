import PropTypes from "prop-types";
import "./ChatMessages.scss";

const ChatMessages = ({
  messages = [],
  messageRenderer = null,
  currentSocket = null,
}) => {
  return (
    <div className="chat-messages-container">
      {messages?.length === 0 ? (
        <div className="flex-container">No messages yet </div>
      ) : (
        messages.map((message) => {
          return (
            <div
              className={[
                "chat-message",
                currentSocket?.id === message?.socketId
                  ? "current-user-message"
                  : "other-user-message",
              ].join(" ")}
              key={message?.socketId + message?.data?.id}
            >
              {messageRenderer(message)}
            </div>
          );
        })
      )}
    </div>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  messageRenderer: PropTypes.func,
  currentSocket: PropTypes.object,
};

export default ChatMessages;
