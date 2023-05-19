// Main file through which game client is launched


// Requirements:
const { connect } = require("./client");
const { setupInput } = require("./input");
 

console.log("Connecting...");
const conn = connect();

setupInput(conn);