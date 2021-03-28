function hitungVokal(stringWord) {
    stringWord = stringWord.toLowerCase();
    let listVocal = ["a", "i", "u", "e", "o"];
    let banyakVokal = 0;

    for (let i = 0; i < stringWord.length; i++) {
        if (listVocal.includes(stringWord[i])) {
            banyakVokal++;
        }
    }
    return(banyakVokal)
}
console.log(hitungVokal("Rsch"))