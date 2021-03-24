let ukuran = process.argv[2];

for (let i = 1; i <= ukuran; i++) {
    for (let j = 1; j <= ukuran; j++) {
        if ((i + j) % 2 == 0) {
            process.stdout.write(" ");
        }
        else {
            process.stdout.write("#");
        }
    }
    console.log();
}