const api_key = "06fdcefa-c1c0-4add-84d9-8378e828fb9f ";

const api_random = "https://api.thecatapi.com/v1/images/search?limit=3";
const api_favourites= "";

async function reload() {

    const res = await fetch(api_random)
    const data = await res.json();
    console.log(data)
    
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;

}

