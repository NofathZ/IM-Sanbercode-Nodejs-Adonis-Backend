const prompt = require('prompt-sync')();

const nama = "Nofath";
const peran = "Penyihir";

try {
    if (!nama) {
        throw("Nama harus diisi");
    }
    else if (!peran) {
        throw("Pilih Peranmu untuk memulai game");
    }
    
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);

    if (peran == "Penyihir") {
        console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
    }
    else if (peran == "Guard") {
        console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
    }
    else if (peran == "Warewolf") {
        console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
    }
}
catch(e) {
    console.error(e)
}