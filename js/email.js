function handleChange(e){
    console.log(e.value);
    data=e.value;
    regx=/^[a-z][a-z0-9]{3,}@[a-z]{4,6}.(com||in)$/

    result=regx.test(data);
    console.log(result);

if(result){
    document.getElementById("msg").innerHTML=`<span class="smsg">SUCCESS</span>`
}
else{
    document.getElementById("msg").innerHTML=`<span class="emsg">FAILED</span>`
}
}