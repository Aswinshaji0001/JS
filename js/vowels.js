a=[];
flag=0;
function clickMe(){
    const val=document.getElementById("t1").value;
    ar=val.split("");
    console.log(ar);
    for(i=0;i<ar.length;i++){
        if(ar[i]=='a' || ar[i]=='e' || ar[i]=='i' || ar[i]=='o' || ar[i]=='u'){
            flag++;
        }
            
    }
    document.getElementById("t2").textContent=`Number of vowels is ${flag}`
}