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
                    <div class="r1">
                     <h4>${data.id}</h4>
                    <h3>${data.name}</h3>
                    <h3>${data.email}</h3>
                    </div>
                    <div class="c1">
                    <h3>${data.body}</h3>
                    </div>
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
