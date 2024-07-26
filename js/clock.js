function putZero(time){
    return time<10?"0"+time:time;
}
function timer(){
    let date = new Date();
    let hours=date.getHours()
    let seconds=date.getSeconds()
    ampm=hours<12?"am":"pm";
    if(hours<=18 && hours>=6){
        document.getElementById("main").style.backgroundImage='url("./images/scenery-wood-rocky-fingers-dream.jpg")'
        document.getElementById("main").style.objectFit='cover'
        document.getElementById("main").style.backgroundSize='cover'
    }
    else{
        document.getElementById("main").style.backgroundImage='url("./images/S.jpg")'
        document.getElementById("main").style.objectFit='cover'
        document.getElementById("main").style.backgroundSize='cover'
    }
    document.getElementById("timer").textContent=`${putZero(hours%12==0?hours:hours%12)} : ${putZero(date.getMinutes())}: ${putZero(date.getSeconds())} ${ampm}`
    setTimeout(()=>{
        timer()
    },1000)
}
timer()
