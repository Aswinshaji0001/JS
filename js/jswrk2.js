function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
                    <h3>${data.userId}</h3>
                    <h4>${data.id}</h4>
                    <p>${data.title}</p>
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
