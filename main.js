let acor =Array.from(document.querySelectorAll(".acor"));

acor.forEach((but)=> {
    but.addEventListener("click" , ()=>{
        but.classList.toggle("active")
        let texto = but.nextElementSibling;
        if (texto.style.display === "block"){
            texto.style.display = "none";
        }else{
            texto.style.display = "block";
        }
    })
});

let text = Array.from(document.querySelectorAll(".texto"))

text.forEach((text) =>{
    text.addEventListener("click" , ()=>{
        let but = text.previousElementSibling;
        but.classList.toggle("active")
        if (text.style.display === "block"){
            text.style.display ="none";
        }
    })
});

const face = document.getElementById("face")

face.addEventListener("click" , ()=>{
    window.open("https://www.facebook.com/abarradas2", "_black")
})

const wapp = document.getElementById("wapp")

wapp.addEventListener("click" , ()=>{
    window.open("https://wa.me/message/MW645D6G32B2D1", "_black")
})

const tele = document.getElementById("tele")

tele.addEventListener("click" , ()=>{
    window.open("https://t.me/Ana_Barradas_Solicitadora", "_black")
})

const insta = document.getElementById("insta")

insta.addEventListener("click" , ()=>{
    window.open("https://instagram.com/anabarradas_solicitadora?igshid=MjEwN2IyYWYwYw==", "_black")
})
