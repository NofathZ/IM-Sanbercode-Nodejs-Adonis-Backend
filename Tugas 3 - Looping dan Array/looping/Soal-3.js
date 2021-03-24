let panjang = process.argv[2];
let lebar = process.argv[3];

for (let i = 0; i < lebar; i++) {
    for (let j = 0; j < panjang; j++) {
        process.stdout.write("#");
    }
    console.log()
}
