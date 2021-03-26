function highestScore(listMhs) {
    listMhs.sort((valueOne, valueTwo) => {
        return valueOne.class.localeCompare(valueTwo.class)
    })

    listMhs.forEach((dataMhs, index) => {
        let data = {
            name: dataMhs.name,
            score: dataMhs.score
        }
        if (index >= 1) {
            if (listMhs[index].class != listMhs[index-1].class) {
                process.stdout.write(dataMhs.class + ": ")
                console.log(data)
            }
        }
        else {
            process.stdout.write(dataMhs.class + ": ")
            console.log(data)
        }
    })
}

highestScore([
    {
        name: 'Bondra',
        score: 100,
        class: 'adonis'
    },
    {
        name: 'Putri',
        score: 76,
        class: 'laravel'
    },
    {
        name: 'Iqbal',
        score: 92,
        class: 'adonis'
    },
    {
        name: 'Tyar',
        score: 71,
        class: 'laravel'
    },
    {
        name: 'Hilmy',
        score: 80,
        class: 'vuejs'
    }
])