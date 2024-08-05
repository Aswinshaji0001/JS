function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
                    <h3>${data.name}</h3>
                    <p>${data.email}</p>
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
