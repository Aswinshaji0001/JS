function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
                     <h4>${data.id}</h4>
                    <h3>${data.name}</h3>
                    <h3>${data.username}</h3>
                    <h3>${data.email}</h3>
                    <div class="c1">
                    <h3>${data.address.street}</h3>
                    <h3>${data.address.suite}</h3>
                    <h3>${data.address.city}</h3>
                    <h3>${data.address.zipcode}</h3>
                    </div>
                    <div class="r1">
                    <h3>${data.address.geo.lat}</h3>
                    <h3>${data.address.geo.lng}</h3>
                    </div>
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
