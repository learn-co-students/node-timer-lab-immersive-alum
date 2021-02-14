const time = process.argv[2];
const timeAmount = parseInt(time.substring(0, time.length - 1));
if (time.substring(time.length - 1) == "s")
{
    timer(timeAmount)
}
else if (time.substring(time.length - 3) == "min")
{
    timer(timeAmount * 60)
}
else
{
    console.log("invalid arguments");
    process.exit(1);
}

function timer(nubmerOfSeconds)
{
    const timerInterval = setInterval(() => {
        console.log(`Left: ${--nubmerOfSeconds}s`);
    }, 1000);
    setTimeout(() => clearInterval(timerInterval), (nubmerOfSeconds + 1) * 1000);
}