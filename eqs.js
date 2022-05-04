function init(){
    let index=0;
    const images=["https://www.auto-data.net/images/f93/Mercedes-Benz-EQS.jpg",
    "https://www.auto-data.net/images/f130/Mercedes-Benz-EQS.jpg",
    "https://www.auto-data.net/images/f41/Mercedes-Benz-EQS.jpg",
    "https://www.auto-data.net/images/f94/Mercedes-Benz-EQS.jpg",
    "https://www.auto-data.net/images/f67/Mercedes-Benz-EQS.jpg",
    "https://www.auto-data.net/images/f91/Mercedes-Benz-EQS.jpg",
    "https://www.auto-data.net/images/f74/Mercedes-Benz-EQS.jpg",
    "https://www.auto-data.net/images/f32/Mercedes-Benz-EQS_4.jpg"
];
    let buttonNext=document.querySelector("#next");
    let buttonPrevious=document.querySelector("#previous");
    buttonNext.addEventListener("click",()=>{
        index++;
        if (index>images.length-1){
            index=0;
        }
        document.querySelector(".imagineEQS").src=images[index];
    })
    buttonPrevious.addEventListener("click",()=>{
        index--;
        if (index==-1){
            index=images.length-1;
        }
        document.querySelector(".imagineEQS").src=images[index];
    })
}
window.onload=init;