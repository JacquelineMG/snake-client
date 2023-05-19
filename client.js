// Separate module to handle project's connection with server and incoming data

// Requirements:
const net = require("net");
const { IP, PORT } = require("./constants");


// Establish connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Set encoding for incoming data
  conn.setEncoding("utf8");

  // Log message on connection to server and sends server gamer's initials
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JMG");
  });

  // Logs messages from the server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};


// Exports:
module.exports = { connect };