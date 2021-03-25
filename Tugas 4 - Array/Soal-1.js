function range(start, end) {
    if (start < end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    else if (start > end) {
        return Array(start - end  + 1).fill().map((_, idx) => start - idx)
    }
    else {
        return new Array
    }
}

var result = range(parseInt(process.argv[2]), parseInt(process.argv[3])); 
console.log(result);