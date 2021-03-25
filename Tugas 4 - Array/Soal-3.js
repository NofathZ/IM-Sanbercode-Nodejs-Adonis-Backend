let listNumber = []

function rangeWithStep(startNum = 0, finishNum = 0, step = 1) {
    if (startNum < finishNum && process.argv.length >= 4) {
        for (let i = startNum; i <= finishNum; i += step) {
            listNumber.push(i);
        }
    }
    else if (startNum > finishNum && process.argv.length >= 4) {
        for (let i = startNum; i >= finishNum; i -= step) {
            listNumber.push(i);
        }
    }
    else {
        listNumber.push(startNum)
    }
}

function sum(start = 0, end = 0, step = 1) {
    rangeWithStep(start, end, step);
    let result;
    if (start != 0) {
        result = listNumber.reduce((acc, curr) => acc + curr);
    }
    else {
        result = 0;
    }
    console.log(result);
}

if (!process.argv[2]) {
    sum(0);
}
else if (!process.argv[3]) {
    sum(parseInt(process.argv[2]))
}
else if (!process.argv[4]) {
    sum(parseInt(process.argv[2]), parseInt(process.argv[3]))
}
else {
    sum(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4]))
}

