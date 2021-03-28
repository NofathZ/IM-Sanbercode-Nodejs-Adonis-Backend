function graduate(listData) {
    let result = {
        participated : [],
        completed : [],
        mastered : []
    }
    listData.map(data => {
        if (data.score > 85) {
            result.mastered.push(data)
        }
        else if (data.score >= 60 && data.score <= 85) {
            result.completed.push(data)
        }
        else {
            result.participated.push(data)
        }
    })
    return(result)
}

var arr = [
    {name:"Ahmad",score:80},
    {name:"Regi",score:86},
    {name:"Robert",score:59},
    {name:"Bondra",score:81}    
]

console.log(graduate(arr))