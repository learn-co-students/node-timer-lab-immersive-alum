
let timeNum = 0;
let arg = process.argv
if(!arg[2]){
    console.log('Please provide a time e.g 5s or 1min.')
  process.exit(1)
}
else if(process.argv[2].includes('min')){
    timeNum =parseInt(process.argv[2].slice(0,-3), 10)*60;
}else if(process.argv[2].includes('s')){
    timeNum =parseInt(process.argv[2].slice(0,-1), 10);
}


setInterval(()=>{
    timeNum --
    console.log(`Left: ${timeNum}s`)
    if(timeNum === 0){
        process.exit(1)
    }
},1000)