const box1 =document.querySelector("#box1")
const box2 =document.querySelector("#box2")
const box3 =document.querySelector("#box3")
const bigbox =document.querySelector(".bigbox")
const img = document.querySelector("img")
let rasm1 = "https://www.meblar.com.pl/wp-content/uploads/2020/10/meblar-nowosci20-2.jpg"
let rasm2 = "https://www.meblar.com.pl/wp-content/uploads/2023/08/system-szaf-dab-artisan-szafy-modulowe.jpg"
let rasm3 = "https://www.meblar.com.pl/wp-content/uploads/2023/08/sypialna-z-lamelami-allmo-.jpg"
let active = false 
box1.onclick =() =>{
    if (active == false) {
        img.setAttribute("src" , rasm1)
        active = false
    }
    else{
        img.getAttribute("src")
        active = false
    }
}
box2.onclick =() =>{
    if (active == false) {
        img.setAttribute("src" , rasm2)
        active = true
    }
    else{
        img.getAttribute("src")
        active = false
    }
}
box3.onclick =() =>{
    if (active == false) {
        img.setAttribute("src" , rasm3)
        active = true
    }
        else{
            img.getAttribute("src")
            active = false
        }
}