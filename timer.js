let startTime = process.argv[2];

let number = parseInt(startTime);
let strNumber = `${number}`;
let unitOfTime = startTime.slice(strNumber.length);//'s' of 'min'

if(unitOfTime === 'min'){
  number = number * 60;
  unitOfTime = 's';
}

function timer(){
  --number;
  console.log(`Left: ${number}` + unitOfTime);
  if(number === 0){
    stopTimer();
  }
}

function stopTimer() {
  global.clearInterval(session);
}

let session = global.setInterval(timer, 1000);
