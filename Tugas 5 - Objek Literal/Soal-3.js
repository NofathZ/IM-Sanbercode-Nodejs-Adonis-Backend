function naikAngkot(listPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    dataAllPenumpang = []

    listPenumpang.forEach(penumpang => {
        let dataPenumpang = {
            penumpang: penumpang[0],
            naikDari: penumpang[1],
            tujuan: penumpang[2],
            bayar: (function() {
                let start = rute.indexOf(penumpang[1]);
                let finish = rute.indexOf(penumpang[2]);
                return (finish - start) * 2000
            })()
        }
        dataAllPenumpang.push(dataPenumpang);
    })
    console.log(dataAllPenumpang);
}

naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']])