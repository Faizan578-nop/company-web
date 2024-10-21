//mengganti nama di home page
let tombolGantiNama = document.getElementById("home-a")

function replaceName (){
    let nama = prompt("Masukkan Nama Anda","")
    let namaHome = document.getElementById("nama-home").innerHTML = nama
}


tombolGantiNama.addEventListener("click",function(){
replaceName()
})
//mengganti nama di home page -END
// untuk bagian kotak message
function setMassage (nama,birthDate,email,gender,massage){
    document.getElementById("sender-full-name").innerHTML = nama
    document.getElementById("sender-birth-date").innerHTML = birthDate
    document.getElementById("sender-email").innerHTML=  email
    document.getElementById("sender-gender").innerHTML= gender
    document.getElementById("sender-messages").innerHTML= massage
}

function validationFrom (){
    const name= document.forms["message-form"]["full-name"].value
    const birth= document.forms["message-form"]["birth-day"].value
    const gmail= document.forms["message-form"]["email"].value
    const gende= document.forms["message-form"]["gender"].value
    const messag= document.forms["message-form"]["area"].value

    if (name == "f" || birth== "" || gmail == "" || gende == "" || messag == ""){
        alert("Mohon Isi Semua!! Tidak Boleh Ada Yang Kosong")
        return false
    }

    setMassage(name,birth,gmail,gende,messag)
    return false
}

// const submitButton = document.getElementById("submit-message")
// submitButton.addEventListener("click",function(){
//     validationFrom()
// })


// untuk bagian kotak message-end