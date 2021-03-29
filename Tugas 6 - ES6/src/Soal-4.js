const data = [
    { name: "Ahmad", class: "adonis"},
    { name: "Regi", class: "laravel"},
    { name: "Bondra", class: "adonis"},
    { name: "Iqbal", class: "vuejs" },
    { name: "Putri", class: "Laravel" }
]

const dataFilter = (dataMhs, className) => {
    let hasilFilter = dataMhs.filter(data => data.class.toLowerCase() == className.toLowerCase())
    console.log(hasilFilter)
}

dataFilter(data, process.argv[2]);