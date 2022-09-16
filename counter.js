function Add(){
            
    let number = parseInt(num.innerHTML);
    number++;
    num.innerHTML = number;

}

function Reset(){
    num.innerHTML = 0;
}
if(!localStorage.getItem("num")){
    console.log("nop")
    localStorage.setItem("num", "0")
}
console.log(localStorage.getItem("num"))
const num = document.querySelector("p");