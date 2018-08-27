
var arg = process.argv[2]
var num = ''
var unit = ''
arg.split('').forEach(el => {
if (parseInt(el)) {
  num += el
} else {
  unit += el
}
})

if (unit === 'min') {
  num = (parseInt(num) * 60).toString()
}

setInterval(function(){
  if (num <= 0) {
    clearInterval()
    process.exit()
  } else {
    num = (parseInt(num) - 1).toString()
    process.stdout.write(`Left: ${num}s\n`)

  }
}, 1000)
