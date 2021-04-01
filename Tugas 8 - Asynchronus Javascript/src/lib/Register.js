const fs = require('fs');

class Register {
    constructor(dataUser) {
        this.addDataUser(dataUser);
    }

    async addDataUser(dataUser) {
        let data = await this.getDataUsers();
        let objectUser = {
            name: dataUser[0],
            password: dataUser[1],
            role: dataUser[2],
            isLogin: false
        }
        data.push(objectUser)
        if (fs.existsSync(__dirname + '/../../data.json')) {
            fs.unlinkSync(__dirname + '/../../data.json')
        }
        await fs.promises.writeFile('data.json', JSON.stringify(data));
    }

    async getDataUsers() {
        if (!fs.existsSync(__dirname + '/../data.json')) {
            fs.promises.writeFile('data.json', JSON.stringify([]));
        }
        let dataJSON = await fs.promises.readFile(__dirname + '/../../data.json', 'utf8')
        let data = JSON.parse(dataJSON)
        return data;
    }
}

function addUser(dataUser) {
    let addNew = new Register(dataUser)
}

module.exports = addUser;