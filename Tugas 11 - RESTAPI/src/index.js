const register = require('./lib/Register')
const login = require('./lib/Login')
const addSiswa = require('./lib/AddSiswa')
const showKaryawan = require('./lib/ShowKaryawan');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.post('/register', (req, res) => {
    let {name, password, role} = req.body;
    let dataUser = [name, password, role];
    register(dataUser);
    res.status(200).json({
        message: "Berhasil Register"
    })
})

app.get('/karyawan', async (req, res) => {
    let hasil = await showKaryawan();
    res.status(200).json({
        message: "Berhasil get karyawan",
        data: hasil
    })
})

app.post('/login', (req, res) => {
    let {name, password} = req.body;
    let dataUser = [name, password];
    login(dataUser);
    res.status(200).json({
        message: "Berhasil Login"
    })
})

app.post('/karyawan/:mentor/:name/:classStd', (req, res) => {
    console.log(req.params)
    let {mentor, name, classStd} = req.params;
    let data = [mentor, name, classStd];
    addSiswa(data);
    res.status(200).json({
        message: data
    })
})

app.listen(3000, () => {
    console.log("Server is running")
})