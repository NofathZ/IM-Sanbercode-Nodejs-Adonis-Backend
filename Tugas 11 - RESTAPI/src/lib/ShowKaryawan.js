const fs = require('fs');

class Karyawan {
    async getDataUsers() {
        let dataJSON = await fs.promises.readFile(__dirname + '/../../data.json', 'utf8')
        let data = JSON.parse(dataJSON)
        return data;
    }
}

async function showKaryawan() {
    let karyawan = new Karyawan();
    dataReturn = await karyawan.getDataUsers();
    return dataReturn;
}

module.exports = showKaryawan;