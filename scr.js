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