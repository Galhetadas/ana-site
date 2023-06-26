let acor =Array.from(document.querySelectorAll(".acor"));

acor.forEach((btn)=> {
    btn.addEventListener("click" , ()=>{
        btn.classList.toggle("active")
        let texto = btn.nextElementSibling;
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

const face = Array.from(document.getElementsByClassName("face"));

face.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        window.open("https://www.facebook.com/abarradas2", "_black")
    });
});

const wapp = Array.from(document.getElementsByClassName("wapp"));

wapp.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        window.open("https://wa.me/message/MW645D6G32B2D1", "_black")
    });    
});

const tele = Array.from(document.getElementsByClassName("tele"));

tele.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        window.open("https://t.me/Ana_Barradas_Solicitadora", "_black")
    });
});

const insta = Array.from(document.getElementsByClassName("insta"));

insta.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        window.open("https://instagram.com/anabarradas_solicitadora?igshid=MjEwN2IyYWYwYw==", "_black")
    });
});

