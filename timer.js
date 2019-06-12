function timer(num){
    let i = argToInt(num)
    setInterval(()=>{
        if (i > 0){
            console.log(`Left: ${--i}s`)
        } else {
            clearInterval()
            process.exit(0)
        }
    }, 1000)
}

function argToInt(arg){
    if (arg.includes("min")){
        return arg.split("min")[0]*60
    } else {
        return arg.split("s")[0]
    }
}


timer(process.argv[2])
