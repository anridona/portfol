const scriptURL="https://script.google.com/macros/s/AKfycbzFNt8GPngnNpF8r1LXdOyfupcHSuL18ssyAiKtdq6R0r-uF5OINOwCyPVK_UChgLVE/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("submit-button").textContent = "Please wait...";
    document.getElementById("submit-button").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("submit-button").textContent = "Send Succesfuly🤩";
            setTimeout(() => {
                document.getElementById("name-field").value = "";
                document.getElementById("email-field").value = "";
                document.getElementById("textarea").value = "";
                document.getElementById("submit-button").textContent = "Send";
                document.getElementById("submit-button").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("submit-button").textContent = "Please Try Again😘"
            document.getElementById("submit-button").disabled = false;
        });
});