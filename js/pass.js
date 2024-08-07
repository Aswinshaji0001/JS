function handleChange(e){
    console.log(e.value);
    data=e.value;
    regx=/([a-zA-Z0-9.]){6,12}/

    result=regx.test(data);
    console.log(result);

if(result){
    
    document.getElementById("msg").innerHTML=`<span class="smsg">SUCCESS</span>`
}
else{

    document.getElementById("msg").innerHTML=`<span class="emsg">FAILED</span>`
}
}