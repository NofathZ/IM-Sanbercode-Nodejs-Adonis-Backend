const convertToObj = (userData) => {
    console.log(userData);
}

let nama = process.argv[2]
let domisili = process.argv[3]
let umur = process.argv[4]

let data = {nama, domisili, umur}

convertToObj(data);
