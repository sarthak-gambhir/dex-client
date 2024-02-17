import useChatRoom from "../../socket/useChatRoom";
import ChatMessageBox from "./ChatMessageBox";
import ChatMessageRenderer from "./ChatMessageRenderer";
import ChatMessages from "./ChatMessages";

import { v4 } from "uuid";

import "./Chat.scss";

const Chat = () => {
  const { messages, socket } = useChatRoom();
  const handleSendMessage = (data) => {
    socket.emit("message", { content: data, id: v4() });
  };

  return (
    <div className="chat-container">
      <ChatMessages
        messageRenderer={ChatMessageRenderer}
        messages={messages}
        currentSocket={socket}
      />
      <ChatMessageBox onSend={handleSendMessage} />
    </div>
  );
};

export default Chat;
