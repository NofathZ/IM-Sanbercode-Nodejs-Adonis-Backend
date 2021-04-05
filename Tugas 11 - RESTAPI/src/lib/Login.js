const fs = require('fs');
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

class Login {
        constructor(userData) {
        this.checkIsLogin(userData)
    }

    async checkIsLogin(userData) {
        let isLogin = false;
        let datas = await this.getDataUsers();
        datas.forEach((data, index) => {
            if (data.name == userData[0] && data.password == userData[1]) {
                datas[index].isLogin = true
            }
        })

        if (fs.existsSync(__dirname + '/../../data.json')) {
            fs.unlinkSync(__dirname + '/../../data.json')
        }
        await fs.promises.writeFile('data.json', JSON.stringify(datas));
    }

    async getDataUsers() {
        let dataJSON = await fs.promises.readFile(__dirname + '/../../data.json', 'utf8')
        let data = JSON.parse(dataJSON)
        return data;
    }
}

async function loginUser(dataUser) {
    let login = await new Login(dataUser);
}

module.exports = loginUser;