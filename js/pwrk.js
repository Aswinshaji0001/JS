
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
       data.map((data)=>{
        str+=`<li>${data.title}</li>`
       })
       document.getElementById("lists").innerHTML=str
    })
    .catch((error)=>{
        console.log(error);
    })
}

fetchData();