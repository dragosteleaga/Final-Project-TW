function init() {
    var x = document.querySelector("#login");
    var y = document.querySelector("#register");
    var z = document.querySelector("#btn");
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
   let hero=document.querySelector(".hero");


   let buttonSchimlaRegister=document.querySelector("#SchimbaRegister");
   let buttonSchimbaFundal=document.querySelector("#SchimbaFundal");
   let buttonSchimlaLogIn=document.querySelector("#schimbaLogIn");
   buttonSchimlaLogIn.addEventListener("click",()=>{
    buttonLogin.click();
    
   })
   buttonSchimlaRegister.addEventListener("click",(ev)=>{
    buttonRegister.click();
    ev.currentTarget.style.color="blue";
    console.log(ev.target,ev.currentTarget);
    ev.stopPropagation();
   })
   buttonSchimbaFundal.addEventListener("click",(ev)=>{
    hero.style.background = "red";
    ev.target.style.color="blue";
    console.log(ev.target,ev.currentTarget);

})

let buttonSubmitLogIn=document.querySelector("#loginbth");
let compStyles=window.getComputedStyle(buttonSubmitLogIn);

let rect = buttonSubmitLogIn.getBoundingClientRect();
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    return (false)
}
let email=document.querySelector("#email");
buttonSubmitLogIn.addEventListener("click",(ev)=>{
    ev.preventDefault();
    
    alert("In caz ca te intrebai , butonul pe care ai apasat are " +compStyles.getPropertyValue('font-size')+"si a fost la coordonata x: " + rect.x +" y: "+ rect.y);
})
let buttonSubmitRegister=document.querySelector("#submitregisterbtn");
buttonSubmitRegister.addEventListener("click",(ev)=>{
    ev.preventDefault();
    if(!ValidateEmail(email)){
        alert("Email ul nu a fost valid !");
    }
})


}
window.onload=init;
