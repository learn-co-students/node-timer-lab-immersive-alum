var remainingTime = 0;

if (!process.argv[2]) {
  console.log("Not working! Please use a valid input such as 5s or 10min");
  process.exit(1);
} else if (process.argv[2].indexOf("s") >= 0) {
  remainingTime = parseInt(process.argv[2].slice(0, -1));
} else if (process.argv[2].indexOf("min") >= 0) {
  remainingTime = parseInt(process.argv[2].slice(0, -3)) * 60;
} else {
  console.log("Not working! Please use a valid input such as 5s or 10min");
  process.exit(1);
}

var interval = setInterval(() => {
  remainingTime--;
  console.log(`Left: ${remainingTime}s`);
  if (remainingTime == 0) {
    clearInterval(interval);
    process.exit(0);
  }
}, 1000);
