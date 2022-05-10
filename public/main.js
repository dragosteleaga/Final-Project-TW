window.addEventListener("load",()=>{
    const xhttp=new XMLHttpRequest(); 
    const titles=xhttp.open("GET","/",false);

    const registerButton=document.querySelector("#register");
    const loginButton=document.querySelector("#login");
    const butonEQS=document.querySelector("#buttonEQS");
    registerButton.addEventListener("click",()=>{
        location.href = "/register";

    })
    loginButton.addEventListener("click",()=>{
        location.href = "/register";
    })
    butonEQS.addEventListener("click",()=>{
        location.href = "/eqsPage";
    })



})



