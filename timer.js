let timeLeft;
const argv = process.argv

if(argv[2].includes('s')){
  timeLeft = Number(argv[2].slice(0, argv[2].length - 1))
} else if(argv[2].includes('min')){
  timeLeft = Number(argv[2].slice(0, argv[2].length - 3)) * 60
} else {
  console.log('Must enter valid time in "(n)s" or "(n)min" format')
  process.exit()
}

if(isNaN(timeLeft)){
  console.log('Must enter valid time in "(n)s" or "(n)min" format')
  process.exit()
}

const timer = setInterval(()=>{
  timeLeft--
  console.log(`Left: ${timeLeft}s`)
  if(timeLeft === 0){
    clearInterval(timer)
    process.exit()
  }
}, 1000)
