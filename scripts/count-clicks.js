import iohook from "iohook";

let mouseClicks = 0;
iohook.on("mousedown", (event) => {
  mouseClicks++;
  console.log(`Mouse clicks: ${mouseClicks}`);
});

// Start capturing mouse click events
iohook.start();

// Listen for process exit and stop capturing
process.on("exit", () => {
  iohook.removeListener("mousedown", () => {});
  iohook.unload();
});

// Handle Ctrl+C to gracefully exit
process.on("SIGINT", () => {
  process.exit(0);
});
