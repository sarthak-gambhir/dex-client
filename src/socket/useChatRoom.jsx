import { useEffect, useState } from "react";
import useSocket from ".";
import defaults from "../config/defaults";

const useChatRoom = () => {
  const { socket } = useSocket({
    connectionUrl:
      "ws://" +
      (import.meta.env.VITE_DEX_SERVER_ADDRESS || defaults.SERVER_URL),
  });
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    function onConnect() {
      setConnected(true);
    }

    function onDisconnect() {
      setConnected(false);
    }

    function onMessageEvent(value) {
      setMessages((previous) => [...previous, value]);
    }

    socket?.on("connect", onConnect);
    socket?.on("disconnect", onDisconnect);
    socket?.on("message", onMessageEvent);

    return () => {
      socket?.off("connect", onConnect);
      socket?.off("disconnect", onDisconnect);
      socket?.off("message", onMessageEvent);
    };
  }, [socket]);

  return {
    connected,
    messages,
    socket,
  };
};

export default useChatRoom;
