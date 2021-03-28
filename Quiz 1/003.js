function tandaA(strings) {
    strings = strings.toLowerCase();
    strings = [...strings];
    strings.forEach((string, index) => {
        if (string == "a") {
            strings[index] = "x";
        }
    })
    return(strings.reduce((arr, curr) => arr + curr));
}
console.log(tandaA("abrakadabra"))