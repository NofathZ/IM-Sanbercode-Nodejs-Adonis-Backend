function introduce(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}

console.log(introduce(process.argv[2], process.argv[3], process.argv[4], process.argv[5]))