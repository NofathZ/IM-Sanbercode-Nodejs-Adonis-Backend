let tinggiTangga = process.argv[2];

for (let i = 0; i < tinggiTangga; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("#");
    }
    console.log()
}