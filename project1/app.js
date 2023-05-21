const inputUser = document.getElementById("inputUser");
const btn = document.getElementById("btn");
const result = document.getElementsByClassName("result")[0];
const sqrResult = document.getElementsByClassName("sqr__result")[0];
const cubeResult = document.getElementsByClassName("cube__result")[0];
const btnReset = document.getElementById("btnReset");


btn.addEventListener('click', ()=>{
    if(inputUser.value === ""){
        alert("Enter the number");
    }else{
        calculate();
    }
   
});

btnReset.addEventListener('click', ()=>{
    sqrResult.innerHTML = "";
    cubeResult.innerHTML = "";
    result.innerHTML = "";
    result.classList.remove("resultshow");
    sqrResult.classList.remove("sqrshow");
    cubeResult.classList.remove("cubeshow");
    inputUser.value = "";
    btnReset.removeEventListener('click');
    btn.removeEventListener('click');
    
})

 

function calculate(){

    const sqr = inputUser.value * inputUser.value;
    const cube = inputUser.value * inputUser.value * inputUser.value;

    result.classList.add("resultshow");
    result.innerHTML = "Result";

    sqrResult.classList.add("sqrshow");
    sqrResult.innerHTML = `Square of ${inputUser.value} = ${sqr}`;
   

    cubeResult.classList.add("cubeshow");
    cubeResult.innerHTML = `Cube of ${inputUser.value} = ${cube}`;

    inputUser.value = "";
}