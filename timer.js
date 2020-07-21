process.argv.shift();
process.argv.shift();

let timeArg = process.argv[0];
let seconds =
  timeArg.slice(-3) === "min"
    ? parseInt(timeArg.slice(0, -3) * 60)
    : timeArg.slice(-1) === "s"
    ? parseInt(timeArg.slice(0, -1))
    : undefined;

const decreaseTime = () => {
  if (typeof seconds !== "number") {
    console.log("Incorrect input!");
    process.exit();
  }

  if (seconds > 0) {
    seconds--;
    console.log("Left: " + seconds + "s");
  } else {
    global.clearInterval(timer);
    process.exit();
  }
};

let timer = global.setInterval(() => {
  decreaseTime();
}, 1000);
