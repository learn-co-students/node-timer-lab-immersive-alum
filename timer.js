let input = process.argv[2]
let seconds = 0
let regexSeconds = /\d*/
let regexUnits = /\D+/
let unit = regexUnits.exec(input)[0]
// debugger

if (!input) {
  console.log("Please enter time in seconds or minutes. For example 5s or 3min.");
  process.exit()
} else if (unit === 's') {
  seconds = parseInt(regexSeconds.exec(input)[0])
} else if (unit === 'min') {
  seconds = parseInt(regexSeconds.exec(input)[0]) * 60
} else {
  console.log("Please enter a valid unit: 's' or 'min'. For example 5s or 3min.");
  process.exit()
}

// console.log(`${seconds} seconds to go...`);

setTimeout( () => {
  console.log("Time is up!");
  clearInterval(intervalId)
}, seconds * 1000)

let intervalId = setInterval( () => {
  seconds--
  console.log(`Left: ${seconds}s`);
}, 1000)
