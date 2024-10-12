const banner = document.getElementById('card-container');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        Cards(data);
    })
function yangiCard(item) {
    return `
        <div class="card">
            <img src="${item.image}" alt="${item.name}" style="width:100%; height:220px;">
            <h2>${item.id}</h2>
            <h2>${item.name}</h2>
            <p>${item.job}</p>
            <p>${item.email}</p>
            <p>${item.pass}</p>
        </div>
    `;
}
function Cards(data) {
    banner.innerHTML = '';
    data.forEach(item => {
        banner.innerHTML += yangiCard(item);
    });
}
document.getElementById('search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item =>
                item.name.toLowerCase().includes(searchTerm)
            );
            Cards(filteredData); 
        })
});
