let listNumber = []

function rangeWithStep(startNum, finishNum, step) {
    if (startNum < finishNum) {
        for (let i = startNum; i <= finishNum; i += step) {
            listNumber.push(i);
        }
        return listNumber;
    }
    else if (startNum > finishNum) {
        for (let i = startNum; i >= finishNum; i -= step) {
            listNumber.push(i);
        }
        return listNumber;
    }
    else {
        return listNumber;
    }
}

let result = rangeWithStep(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4]))
console.log(result)