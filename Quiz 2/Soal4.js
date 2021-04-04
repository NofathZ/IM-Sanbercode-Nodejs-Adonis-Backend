var data = {
    name: 'Bondra',
    nilai:70,
    kelas:'Adonis',
    isLogin:true
}

let updateData = ({name, nilai, kelas, isLogin}) => {
    if (name) data.name = name
    if (nilai) data.nilai = nilai
    if (kelas) data.kelas = kelas
    if (isLogin) data.isLogin = isLogin

    return data;
}

console.log(updateData({nilai: 65, kelas: 'Laravel'}))