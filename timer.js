const ns = process.argv[2]
const matchNumbers = /\d+/
const matchUnits = /\D+/

let time = matchNumbers.exec(ns)[0]
let units = matchUnits.exec(ns)[0]

if (units === 'min') time *= 60

const countdown = (time) => {
  return time < 60 ? `Left: ${ time }s` : `Left: ${ parseInt(time / 60) }min ${ time % 60 }s`
}

const timer = global.setInterval( () => {
  time--
  time < 0 ? process.exit() : console.log(countdown(time))
}, 1000)

timer












// console.log(time, units)
