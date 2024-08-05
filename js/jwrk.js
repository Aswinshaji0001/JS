function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
                <img src="${data.thumbnailUrl}" alt="">
                    <h3>${data.title}</h3>
                    <p>${data.id}</p>
                    <img src="${data.url}" alt="">
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
