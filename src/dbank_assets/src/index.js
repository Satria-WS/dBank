import { dbank } from "../../declarations/dbank";

window.addEventListener("load",async function(){
    console.log("Hello world");
    const currentAmount = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

});

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();
    // //console.log(event);
    const button = event.target.querySelector("#submit-btn");
    console.log(button);

    //we have to convert this into a floating point number to parseFloat
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    
    await dbank.topUp(inputAmount);
    const currentAmount = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

})
