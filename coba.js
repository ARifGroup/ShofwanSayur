let jadiPesanWa = "";
function lali () {
    const nama = "sayur bayam besar";
    const jadiArray = nama.split(` `);
    jadiArray.forEach(data => {
        jadiPesanWa += data+"20%";
    });
}
lali ();
console.log(`Isi wa adalah ${jadiPesanWa}`);
