var s = 0

if (process.argv[2].indexOf('s') > -1) {
  s = parseInt(process.argv[2], 10)
} else if (process.argv[2].indexOf('min') > -1) {
  s = parseInt(process.argv[2].slice(0, -3), 10) * 60
}

var interval = setInterval(function () {
  s--
  console.log(`Left: ${s}s`)
  if (s == 0) {
    clearInterval(interval)
    process.exit()
  }
}, 1000);
