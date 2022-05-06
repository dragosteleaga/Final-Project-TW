function init() {
    var x = document.querySelector("#login");
    var y = document.querySelector("#register");
    var z = document.querySelector("#btn");
    console.log("maiu");
    let buttonRegister=document.querySelector("#registerbtn");
    let buttonLogin=document.querySelector("#loginbtn");

    buttonRegister.addEventListener("click",()=>{
         x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    })
    buttonLogin.addEventListener("click",()=>{
        x.style.left = "50px";
       y.style.left = "450px";
       z.style.left = "0px";
   })

}
window.onload=init;
