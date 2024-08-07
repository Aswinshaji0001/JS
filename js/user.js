function handleChange(e){
    console.log(e.value);
    data=e.value;
    regx=/^[a-z]{4,}\d{3}$/

    result=regx.test(data);
    console.log(result);

if(result){
    document.getElementById("msg").innerHTML=`<span class="smsg">SUCCESS</span>`
}
else{
    document.getElementById("msg").innerHTML=`<span class="emsg">FAILED</span>`
}
}