import io from "socket.io-client";

// export const socket = io('ws://192.168.1.236:8335/', {
//     path: '/test'
// });

// const socket2 = new io.Socket();
// export const getSocket = () => socket2.connect('http//192.168.1.236:8335');

//промис для установления соединения с сервером

export const connectWS = () => {
  return new Promise((resolve, reject) => {
    const server = new WebSocket("ws://192.168.1.236:8333/test");
    server.onopen = () => {
      resolve(server);
    };
    server.onerror = (err) => {
      reject(err);
    };
  });
};
