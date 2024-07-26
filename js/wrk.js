function clickME(){
    a=[];
    a.push(document.getElementById("num").value);
    display();
}
function display(){
    let str="";
    for(i=0;i<a.length;i++){
        str=`${a[i]}`
    }
    console.log(str);
    const data=document.createElement("li")
    data.textContent=str;
    document.getElementById("list").appendChild(data);
}
