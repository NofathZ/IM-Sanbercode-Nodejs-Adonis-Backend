function tandaA(strings) {
    strings = strings.toLowerCase();
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] == "a") {
            strings = strings.replace("a", "x");
        }
    }
    return(strings);
}
console.log(tandaA("abrakadabra"))