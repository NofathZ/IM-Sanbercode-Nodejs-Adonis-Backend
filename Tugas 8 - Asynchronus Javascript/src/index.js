const register = require('./lib/Register')
const login = require('./lib/Login')
const addSiswa = require('./lib/AddSiswa')
const fs = require('fs');

class MainMenu {
    constructor(command, data) {
        command = command.toLowerCase();
        switch(command) {
            case "register": {
                let dataUser = data.split(",");
                this.register = dataUser;
                break;
            }
            case "login": {
                let dataUser = data.split(",");
                this.login(dataUser);
                break;
            }
            case "addsiswa": {
                let dataUser = data.split(",");
                this.addSiswa = dataUser;
                break;
            }
        }
    }

    set register(objectPerson) {
        register(objectPerson)
    }
    login(objectPerson) {
        login(objectPerson)
    }
    set addSiswa(objectData) {
        addSiswa(objectData);
    }
}

const [command, data] = process.argv.slice(2);

let RumahSakit = new MainMenu(command, data);