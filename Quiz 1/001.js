function kelompokAngka(myArr) {
    let result = [[],[],[]];
    
    myArr.forEach(number => {
        if (number % 3 == 0) {
            result[2].push(number)
        }
        else if (number % 2 != 0) {
            result[0].push(number)
        }
        else {
            result[1].push(number)
        }
    })
    return(result)
}

console.log(kelompokAngka([1,2,3,4,5,6,7]))