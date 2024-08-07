function handleChange(e){
    console.log(e.value);
    data=e.value;
    regx=/^[6-9]\d{2}-\d{3}-\d{4}/

    result=regx.test(data);
    console.log(result);

if(result){
    document.getElementById("msg").innerHTML=`<span class="smsg">SUCCESS</span>`
}
else{
    document.getElementById("msg").innerHTML=`<span class="emsg">FAILED</span>`
}
}