function Clickme(){
    const val=parseInt(document.getElementById("num").value);
    document.getElementById("data").textContent=`Square is =${val*val}`
}
function Clicksum(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Sum =${val+vak}`
}
function Clicksub(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Sub  =${val-vak}`
}
function Clickdiv(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Div =${val/vak}`
}
function Clickmod(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Mod =${val%vak}`
}
function colour(){
    document.getElementById("clr").style.backgroundColor="orange"
    document.getElementById("clr").style.textAlign="center"
}
