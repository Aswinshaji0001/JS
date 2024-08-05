
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
                    <h3>${data.id}</h3>
                    <p>${data.body}</p>
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
