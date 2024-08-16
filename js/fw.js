// // fetch method


// fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
//     if(res.status==200){
//         return res.json();
//     }
//     else{
//         alert("invalid API")
//     }
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("network issue");
//     console.log(error);
// })

//async await

async function fetchData(){
    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/todos");
        if(res.status!=200)
        return alert("Invalid API");
        const data= await res.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchData()