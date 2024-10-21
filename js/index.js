//mengganti nama di home page
let tombolGantiNama = document.getElementById("home-a")
function replaceName (){
    let nama = prompt("Masukkan Nama Anda","")
    let namaHome = document.getElementById("nama-home").innerHTML = nama
}
replaceName()
tombolGantiNama.addEventListener("click",function(){
replaceName()
})
//mengganti nama di home page -END