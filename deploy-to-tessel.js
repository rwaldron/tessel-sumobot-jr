const net = require("net");
const five = require("johnny-five");
const Tessel = require("tessel-io");
const board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  const leftWheel = new five.Servo({ pin: "a5", type: "continuous" }).stop();
  const rightWheel = new five.Servo({ pin: "a6", type: "continuous" }).stop();

  const server = net.createServer(socket => {
    socket.on("data", payload => {
      const {ch, key} = JSON.parse(payload);

      if (key.name === "q") {

        console.log("Quitting");
        process.exit();

      } else if (key.name === "up") {

        console.log("Forward");
        leftWheel.ccw();
        rightWheel.cw();

      } else if (key.name === "down") {

        console.log("Backward");
        leftWheel.cw();
        rightWheel.ccw();

      } else if (key.name === "left") {

        console.log("Left");
        leftWheel.ccw();
        rightWheel.ccw();

      } else if (key.name === "right") {

        console.log("Right");
        leftWheel.cw();
        rightWheel.cw();

      } else if (key.name === "space") {

        console.log("Stopping");
        leftWheel.stop();
        rightWheel.stop();

      }
    });
  }).listen(1337);
});
