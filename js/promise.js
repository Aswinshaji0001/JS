// const fetchData=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(true){
//                 resolve("Sucess");
//             }
//             else{
//                 reject("Failed");
//             }
//         },2000)
//     });
// }

// fetchData().then((dt)=>{console.log(dt)}).catch((error)=>{console.log(error);})

// ----------------------------------------------------------


function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

fetchData();