let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#response").innerHTML = data.map(render).join('');
    });

function render(res) {
    return `<p class="name"><span>Name: </span>${res.name}<p>
        <p class="username"><span>Username: </span>${res.username}</p>
        <p class="email"><span>Email: </span>${res.email}</p>
        <p class="street"><span>Street: </span>${res.address.street}</p>
        <p class="suite"><span>Suite: </span>${res.address.suite}</p>
        <p class="city"><span>City: </span>${res.address.city}</p>
        <p class="zipcode"><span>Zip-code: </span>${res.address.zipcode}</p>
        <p class="phone"><span>Phone: </span>${res.phone}</p>
        <p class="website"><span>Website: </span>${res.website}</p>
        <p class="companyName"><span>Company name: </span>${res.company.name}</p>
        <br>`;
}

//7003303