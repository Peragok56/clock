function start(){
    window.timerId = window.setInterval(timer, 1000)
}

function stop(){
    window.clearInterval(window.timerId)
}

function timer(){
    var clock = document.getElementById('clock')
    var date = new Date();

    clock.innerHTML = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' +
    addZero(date.getSeconds())
}

function addZero(num){
    if(num <= 9){
        return '0' + num
    } else {
        return num
    }
}

var text = document.getElementById('clock');
var color = [200, 255, 0, 255, 0, 0];
var pointer = 0;
var increment = true;

var gradEnabled = true;

var modifier = 0.5;

function randomNumber(a, b){
    return Math.round(Math.random()*(b-a) + a);
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

setInterval(()=>{
    if(gradEnabled){
        document.getElementById('clock').classList.add('gradEnabled');
        let doSwitch = false
        if(increment){
            if(color[pointer] + 1*modifier < 254){
                color[pointer] += 1*modifier;
            }else{
                doSwitch = true
            }
        } else {
            if(color[pointer] - 1*modifier > 1){
                color[pointer] -= 1*modifier;
            }else{
                doSwitch = true
            }
        }

        if(color[pointer] > 255) color[pointer] = 255;
        if(color[pointer] < 0) color[pointer] = 0

        if(doSwitch){
            if(Math.round(Math.random())){
                if(increment){
                    increment = false; 
                } else {
                    increment = true;
                }
            }else{
                pointer = randomNumber(0, 5);
            }
        }
        colorb1 = rgbToHex(color[0], color[1], color[2]);
        colorb2 = rgbToHex(color[3], color[4], color[5]);
        //console.log(` %c ${colorb1} %c ${colorb2}`, `color: ${colorb1}`, `color: ${colorb2}`)
        document.getElementById('clock').style.background = '-webkit-linear-gradient('+rgbToHex(Math.round(color[0]), Math.round(color[1]), Math.round(color[2]))+','+rgbToHex(Math.round(color[3]), Math.round(color[4]), Math.round(color[5]))+')';
        document.getElementById('clock').style.webkitBackgroundClip = 'text'

    } else {
        document.getElementById('clock').classList.remove('gradEnabled');
    }
}, 10)

document.addEventListener('keypress', (e)=>{
    
})
