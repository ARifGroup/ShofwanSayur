document.addEventListener("DOMContentLoaded", function() {
    const varBeli = [];
    const listBeli = document.querySelector("#text-kranjang ul");
    const order = document.getElementById("pesan");
    let pesanWA = "";

    
    section1.addEventListener("click", function(event) {
        if(event.target.classList.contains("tambah")) {
            const beliID = parseInt(event.target.closest("[id]").id);
            // console.log(dataFetch[0].id);
            
            let masukKranjang;
            dataFetch.forEach((data) => {
                if(data.id === beliID) {
                    masukKranjang = {
                        id: data.id,
                        namaBarang: data.namaBarang,
                        hargaBarang: data.hargaBarang,
                        qty: 1,
                        satuan: data.satuan

                    }
                }
            });
            
            let sudahAda = 0;
            varBeli.forEach((data) => {
                if(data.id === masukKranjang.id) {
                    sudahAda = data.id;
                    return;
                }                
            });
            if (sudahAda) {
                varBeli.forEach((data) => {
                    if(data.id === masukKranjang.id) {
                        data.qty ++;
                    }
                });
            } else {
                varBeli.push(masukKranjang);
            }
            // console.log(varBeli);
        }        
        
        function generatePesan () {
            pesanWA = "https://wa.me/+6289531427766?text=Saya%20ingin%20membeli%20:%0A";
            varBeli.forEach((dataa) => {
                const Qty = dataa.qty;
                const stringQty = String(Qty);
                // =============== Pembenaran format Pesan WA
                const pesan = `${dataa.namaBarang}%20:%20${stringQty}%20${dataa.satuan}`;
                pesanWA += pesan + "%0A";
            });
            const urlWA = pesanWA.split(` `);
            pesanWA = "";
            urlWA.forEach(data => {
                pesanWA += data+"%20";
            })
        };
        
        function generateTotal () {
            const divTotalBayar = document.getElementById("totalBayar");
            divTotalBayar.innerHTML = "";
            let totalBayar = 0;
            varBeli.forEach((data) =>{
                let totalHargaPerBarang = data.hargaBarang*data.qty;
                totalBayar += totalHargaPerBarang;
            });

            const divTotalH2 = document.createElement("h2");
            divTotalH2.textContent = `Rp ${totalBayar}`;
            divTotalBayar.appendChild(divTotalH2);
            console.log(totalBayar);
        };

        function generateList () {
            listBeli.innerHTML = "";
            varBeli.forEach((data) => {
                const listB = document.createElement("li");
                listB.textContent = `${data.namaBarang} : ${data.qty}`;
                listBeli.appendChild(listB);
                const removeListB = document.createElement("button");
                removeListB.setAttribute("id", data.id);
                removeListB.textContent = "X";
                listB.appendChild(removeListB);
                removeListB.addEventListener("click", function(event) {
                    const target = parseInt(event.target.closest("[id]").id);
                    removeVarBeli(target);
                });
            });
        };
        
        function removeVarBeli(removeIdButton) {
            varBeli.forEach((data) => {
                // id button masuk ke removeIDButton
                if(data.id === removeIdButton) {
                    varBeli.splice(varBeli.indexOf(data), 1);
                    generateList();
                    generatePesan();
                    generateTotal();
                    console.log(pesanWA);        
                }
            });
        };

        if ( varBeli.length > 0 ) {
            generateList();
            generatePesan();
            generateTotal();
            console.log(pesanWA);  
        };
        
    });
});