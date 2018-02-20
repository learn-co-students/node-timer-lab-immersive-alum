var input = process.argv[2],
    time;

if (input.includes('s')) {
    time = input.replace('s', '')
} else if (input.includes('min')) {
    time = parseInt(input.replace('min', '')) * 60
} else {
    process.exit(1)
}

time -= 1 // Remove first second

global.interval = setInterval(() => {
    console.log("Left:", time.toString() + "s")
    time -= 1
    if (time === -1) {
        clearInterval(global.interval)
    }
}, 1000)
