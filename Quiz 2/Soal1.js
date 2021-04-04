class OlahString {
    palindrome(str) {
        let reversStr = "";
        for (let i = str.length-1; i >= 0; i--) {
            reversStr += str[i];
        }
        console.log(str == reversStr)
    }

    ubahKapital(str) {
        let ubahKapital = ""
        for (let i = 0; i < str.length; i++) {
            if (i == 0) {
                ubahKapital += str[i].toUpperCase()
            }
            else {
                ubahKapital += str[i]
            }
        }
        console.log(ubahKapital)
    }
}

let olahString = new OlahString();
olahString.palindrome("katak")
olahString.ubahKapital("nofath")