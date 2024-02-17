import { useMemo } from "react";
import { io } from "socket.io-client";

const useSocket = ({ connectionUrl = null }) => {
  const socket = useMemo(() => io(connectionUrl), [connectionUrl]);

  return { socket };
};

export default useSocket;
