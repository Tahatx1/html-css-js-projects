const btn = document.querySelector(".checkbox");
const target  = document.querySelector("body");
const test = localStorage.getItem('toggle');

const bodyBg = () => {
    if(btn.checked){
        target.style.backgroundColor = "black"; 
        
    }
    else{
        target.style.backgroundColor = "aquamarine"; 

    }
}
const updateStorage = () => {
    localStorage.setItem("toggle" , btn.value);
}

btn.addEventListener(
    'input',
    () => {
        bodyBg();
        updateStorage();
        
    }
);