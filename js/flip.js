     async function fetchData(){
    try{
        const res=await fetch("https://dummyjson.com/products");
        const products= await res.json();
        str=``
        products.products.map((product)=>{
            str+=`<div class="card">
                    <img src="${product.thumbnail}" alt="">
                    <h5>${product.title.substring(0,15)}</h5>
                    <p>${product.price}</p>
            </div>`
        })
        document.getElementById("cards").innerHTML=str;
    }
    catch(error)
    {
        console.log(error);
    }
    document.getElementById("search").addEventListener('keyup',async(e)=>{
        console.log(e.target.value);
        try{
            const res=await fetch("https://dummyjson.com/products");
        const products= await res.json();
        console.log(products.products);
        str=``
        products.products.filter((i)=>i.title.toLowerCase().includes(e.target.value.toLowerCase())).map((product)=>{
            str+=`<div class="card">
                    <img src="${product.thumbnail}" alt="">
                    <h5>${product.title.substring(0,15)}</h5>
                    <p>${product.price}</p>
            </div>`
        })
        document.getElementById("cards").innerHTML=str;
    }
    catch(error)
    {
        console.log(error);
    }
        
    })
    
}
fetchData();