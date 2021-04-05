const fs = require('fs');
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

class AddSiswa {
    constructor(dataInput) {
        this.addSiswa(dataInput);
    }

    async addSiswa(dataInput) {
        let datas = await this.getDataUsers();
        datas.forEach((data, index) => {
            if (data.name == dataInput[0]) {
                if (data.role == "admin" && data.isLogin == true) {
                    if (!data.hasOwnProperty('students')) {
                        datas[index]["students"] = [{
                            name: dataInput[1],
                            class: dataInput[2]
                        }];
                    }
                    else {
                        datas[index]['students'].push({
                            name: dataInput[1],
                            class: dataInput[2]
                        })
                    }
                }
            }
        })
        if (fs.existsSync(__dirname + '/../../data.json')) {
            fs.unlinkSync(__dirname + '/../../data.json')
        }
        await fs.promises.writeFile('data.json', JSON.stringify(datas));
    }

    async getDataUsers() {
        if (!fs.existsSync(__dirname + '/../../data.json')) {
            fs.promises.writeFile('data.json', JSON.stringify([]));
        }
        let dataJSON = await fs.promises.readFile(__dirname + '/../../data.json', 'utf8')
        let data = JSON.parse(dataJSON)
        return data;
    }
}

function addingSiswa(data) {
    let newSiswa = new AddSiswa(data);
}

module.exports = addingSiswa;