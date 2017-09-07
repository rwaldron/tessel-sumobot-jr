const keypress = require("keypress");
const yaml = require("js-yaml");
const fs = require("fs");
const net = require("net");

const config = yaml.safeLoad(fs.readFileSync("./config.yml", "utf8"));
const client = new net.Socket();

keypress(process.stdin);
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);

client.connect(config.port, config.host, () => {
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
