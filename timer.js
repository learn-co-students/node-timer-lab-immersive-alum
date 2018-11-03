let timeEnd = 0

if (process.argv[2].indexOf('s') > -1) {
  timeEnd = parseInt(process.argv[2].slice(0, -1), 10)
} else if (process.argv[2].indexOf('min') > -1) {
  timeEnd = parseInt(process.argv[2].slice(0, -3), 10) * 60
} else {
  process.exit()
}

setInterval(() => {
  timeEnd--
  console.log(`Left: ${timeEnd}s`)
  if (parseInt(timeEnd, 10) === 0) {
    clearInterval()
    process.exit()
  }
}, 1000)
