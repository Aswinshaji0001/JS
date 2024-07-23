document.getElementById("h1").innerHTML="HAI HELLO"
document.getElementById('h1').innerText="HOLAA"

document.getElementById("h1").setAttribute('class','h2')

let y=document.getElementById("h1").getAttribute('class')
console.log(y);

document.getElementById("h1").removeAttribute("class")

document.getElementById("h1").style.backgroundColor="orange"