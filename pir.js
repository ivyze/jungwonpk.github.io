var wpi =require('wiringpi');

wpi.setup('wpi');

var inPin =7;
var pir_state =true;

wpi.pinMode(inPin, wpi.INPUT);
wpi.pinMode(inPin, wpi.OUTPUT);

setInterval(function(){
  if(pir_state){
    if(wpi.digitialRead(inPin)){
    console.log('Detect Someone');
    pir_state =false;
    console.log('[LOCK] pir');

    setTimeout(function(){
      pin_state = true;
      console.log('[UNLOCK]pir');
      wpi.digitalWrite(inPin,wpi.LOW);
    },10000);
  }else{
    console.log('not detect');
    }
  }
},1000);
