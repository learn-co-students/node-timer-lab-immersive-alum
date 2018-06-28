let sec,
  input = process.argv[2].charAt(process.argv[2].length - 1);

if (input === "s") {
  sec = process.argv[2].slice(0, process.argv[2].length - 1);
} else if (input === "n") {
  sec = parseInt(process.argv[2].slice(0, process.argv[2].length - 3) * 60);
} else if (input !== "s" || input !== "n")
  throw "Enter either in seconds or min. Eg. 5s, 5min";
sec--;
global.setInterval(() => {
  console.log("Left: " + sec.toString() + "s");
  sec--;
  sec < 0 ? process.exit() : null;
}, 1000);
global.clearInterval();
