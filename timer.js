function secondsTimer(input) {
  var time = input[2].split('');
  var timeType;
  var seconds;
  var numbers = "";

  if (input[2][input[2].length -1] == 's') {
    timeType = 'seconds';
  } else if (input[2][input[2].length -1] == 'n') {
    timeType = 'minutes'
  }

  for (var i = 0; i < time.length; i++){
    if (!isNaN(parseInt(time[i]))) {
      numbers += time[i];
    }
  };

  if (timeType == 'seconds') {
    seconds = parseInt(numbers);
  } else if (timeType == 'minutes') {
    seconds = parseInt(numbers) * 60
  }


  global.setInterval(function(){
    if (seconds <= 0) {
      process.exit()
      global.clearInterval()
    }
    seconds--
    console.log(`Left: ${seconds}s`);
  },1000)
}

secondsTimer(process.argv)
