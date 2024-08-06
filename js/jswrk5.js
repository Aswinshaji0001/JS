async function fetchData(){
    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/todos")
        const todos = await res.json();
        console.log(todos);
        str=``
        todos.map((todo)=>{
            str+=` <tr>
            <td class="num">${todo.id}</td>
            <td class="title">${todo.title}</td>
            <td>${todo.completed?`<span class="cmp">completed</span>`:`<span class="ncmp">not completed</span>`}</td>
        </tr>`
        })
        document.getElementById("tbody").innerHTML=str
    }
    catch(error){
        console.log(error);
    }
}