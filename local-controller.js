const keypress = require("keypress");
const net = require("net");
const client = new net.Socket();

keypress(process.stdin);
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);

// Change this to "tessel-name.local"
const host = "127.0.0.1";

client.connect(1337, host, () => {
  process.stdin.on("keypress", (ch, key) => {
    if (!key) {
      return;
    }

    client.write(JSON.stringify({ ch, key }));

    if (key.name === "q") {
      setImmediate(() => {
        console.log("Quitting");
        process.exit();
      });
    }
  });
});
