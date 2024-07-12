const section1 = document.querySelector("#jualan");


function generate(data) {
    data.forEach((data) => {
        section1.innerHTML += '';

        if (!data.diskon) {

        section1.innerHTML += `

        <article>
            <div class="card">
                <div class="img">
                    <img src="view/Phot/${data.fotoBarang}" alt="${data.fotoBarang}">
                </div>
                <div class="text">
                    <h2>${data.namaBarang}</h2>
                    <div class="harga">
                        <p>Rp ${data.hargaBarang} <strong>per ${data.satuan}</strong></p>
                    </div>
                    <button class="tambah" id="${data.id}">Tambah ke kranjang</button>
                </div>
        </article>
        `
    }  
    });
}

let dataFetch;

fetch("file.json")
    .then(response => response.json())
    .then(function part (data) { 
        generate(data);
        dataFetch = data;
    }
    )
    .catch(error => console.log(error));