     async function fetchData(){
    try{
        const res=await fetch("https://dummyjson.com/docs/products");
        const products= await res.json();
        console.log(products);
        console.log(products.products);
        str=``
        products.products.map((product)=>{
            str+=`<div class="card">
                    <img src="${products.thumbnail}" alt="">
                    <h5>${products.title}</h5>
                    <p>${products.price}</p>
            </div>`
        })
        document.getElementById("cards").innerHTML=str
    }
    catch(error){
        console.log(error);
    }
}
fetchData();