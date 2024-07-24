// console.log("Start");
// setTimeout(()=>{for(i=0;i<10;i++){
//     console.log(i);
// }},3000)
// console.log("End");

let i=1;
let x=setInterval(()=>{
    document.write(i);
    if(i==10){
        clearInterval(x);
    }
    i++;
},1000)