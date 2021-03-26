var now = new Date();

function arrayToObject(myArr) {
    myArr.forEach((arr, index) => {
        let obj = {
            firstName: arr[0],
            lastName: arr[1],
            gender: arr[2],
            age: (function() {
                var thisYear = now.getFullYear()
                let ageNow = thisYear - arr[3] - 1
                return ageNow || "Invalid Birth Year"
            })()
        }
        process.stdout.write(`${index+1}. ${arr[0]} ${arr[1]} : `)
        console.log(obj)
    })
}

const data = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(data)