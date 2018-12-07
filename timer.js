let time = process.argv[2]

if (time.includes("s")) {
  let remainingTime = parseInt(time.split('s')[0])
  let countdown = global.setInterval(() => {
    remainingTime--

    if (remainingTime === 0) {
      console.log('Done')
    } else {
      console.log(`Left: ${remainingTime}s`)
    }

    if (remainingTime === 0) {
      global.clearInterval(countdown)
      process.exit()
    }

  }, 1000)
} else if (time.includes('m')) {
  let remainingMinutes = parseInt(time.split('m')[0]) - 1
  let remainingSeconds = 60
  let countdown = global.setInterval(() => {
    remainingSeconds--
    if (remainingMinutes > 0 && remainingSeconds < 0) {
      remainingSeconds = 59
      remainingMinutes--
    }

    if (remainingMinutes > 0) {
      console.log(`Left: ${remainingMinutes}m ${remainingSeconds}s`)
    } else if (remainingMinutes <= 0 && remainingSeconds === 0) {
      console.log('Done')
    } else {
      console.log(`Left: ${remainingSeconds}s`)
    }

    if (remainingMinutes <= 0 && remainingSeconds === 0) {
      global.clearInterval(countdown)
      process.exit()
    }
  }, 1000)

}
