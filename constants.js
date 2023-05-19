//Separate module for project's constant values


const IP = "localhost";
const PORT = 50541;

// Keys bound to game-play movement
const MOVE_UP_KEY = "w";
const MOVE_DOWN_KEY = "s";
const MOVE_LEFT_KEY = "a";
const MOVE_RIGHT_KEY = "d";

// Special keys that send canned messages to the server
const MESSAGE = {
  "j": "Say: SNAKE ATTACK!",
  "k": "Say: Slithering Along...",
  "i": "Say: Snake Eyes!",
  "l": "Say: Feed Me!"
};


// Exports:
module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MESSAGE
};