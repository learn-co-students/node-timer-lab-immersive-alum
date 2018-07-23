
let time = process.argv[2]

if(time.includes('s')){
  time = parseInt(time.slice(0, -1), 10)
} else if(time.includes('min')) {
  time = parseInt(time.slice(0, -3), 10) * 60
}

global.setInterval( () => {
  time --
  console.log(`Left: ${time}s`)
  if (time == 0) {
    global.clearInterval()
    process.exit(0)
  }
}, 1000)
