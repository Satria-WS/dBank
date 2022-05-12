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

    button.setAttribute("disabled",true);
    
    if (document.getElementById("input-amount").value.length != 0) {
      await dbank.topUp(inputAmount);
   }

    if (document.getElementById("withdrawal-amount").value.length != 0) {
      await dbank.withDraw(outputAmount);
   }
    
    // await dbank.topUp(inputAmount);

    const currentAmount = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    button.removeAttribute("disabled");

    
})
