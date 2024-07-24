let i=10;
let x=setInterval(()=>{
    document.getElementById("d1").textContent=i;
    if(i==0){
        document.getElementById("d1").textContent="start"
        clearInterval(x);
    }
    i--;
},1000)