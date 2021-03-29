const checkScore = (userData) => {
    let [satu, dua, tiga] = userData.split(",");
    let nameData = satu.split(":");
    let classData = dua.split(":");
    let scoreData = tiga.split(":");
    let objectData = {
        [nameData[0]]: nameData[1],
        [classData[0]]: classData[1],
        [scoreData[0]]: scoreData[1]
    }
    console.log(objectData)
}

checkScore(process.argv[2]);