// const kranjang = document.querySelector("#kranjang");
const imgKranjang = document.querySelector(".kranjang img");
const tabelPembelian = document.querySelector("#text-kranjang");



imgKranjang.addEventListener("click", function (e) {
        tabelPembelian.classList.toggle("hidden");
});

