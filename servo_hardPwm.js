var wpi =require('wiringpi');

wpi.setup('wpi');

var pin =1;
var num = 6;//var num =60;
var isRight =true;

wpi.pinMode(pin,wpi.PWM_OUTPUT);
wpi.pwmSetMode(wpi.PWM_MODE_MS);
wpi.pwmSetClock(1920);
wpi.pwmSetRange(200);

setInterval(function(){
    wpi.softPwmWrite(pin,num);
    if(isRight){
      num +=1;
    }else{
      num-=1;
    }
    if(num == 24){
      isRight = false;
    }
    if(num == 6){
      isRight = true;
    }
},100);
