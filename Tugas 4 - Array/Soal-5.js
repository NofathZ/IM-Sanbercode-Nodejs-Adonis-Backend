function balikKata(words) {
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] == ",") {
            process.stdout.write(" ");
        }
        else {
            process.stdout.write(words[i]);
        }
    }
}

balikKata(process.argv[2])