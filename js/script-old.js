let apiUrl = "https://api.green-api.com";

// inputs
let inputIdInstance = document.querySelector("#input-id-instance");
let inputApiTokenInstance = document.querySelector("#input-api-token-instance");

let inputMessageNumber = document.querySelector("#input-message-number");
let textareaMessage = document.querySelector("#textarea-message");

let inputFileUrlNumber = document.querySelector("#input-file-url-number");
let inputFileUrl = document.querySelector("#input-file-url");

// buttons
let btnGetSettingsBtn = document.querySelector("#get-settings-btn");
let getStateInstanceBtn = document.querySelector("#get-state-instance-btn");

let sendMessageBtn = document.querySelector("#send-message-btn");
let sendFileByUrlBtn = document.querySelector("#send-file-by-url");

// readonly text
let readonlyText = document.querySelector("#readonly-text");

// listeners
btnGetSettingsBtn.onclick = function () {
    var xhttp = new XMLHttpRequest();
    // handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
        } else {
            readonlyText.textContent = "Something went wrong!";
        }
    };
    // request
    // GET {{apiUrl}}/waInstance{{idInstance}}/getSettings/{{apiTokenInstance}}
    xhttp.open("GET", apiUrl +
        "/waInstance" +
        inputIdInstance.value +
        "/getSettings/" +
        inputApiTokenInstance.value);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

getStateInstanceBtn.onclick = function () {
    var xhttp = new XMLHttpRequest();
    // handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
        } else {
            readonlyText.textContent = "Something went wrong!";
        }
    };
    // request
    // GET {{apiUrl}}/waInstance{{idInstance}}/getStateInstance/{{apiTokenInstance}}
    xhttp.open("GET", apiUrl +
        "/waInstance" +
        inputIdInstance.value +
        "/getStateInstance/" +
        inputApiTokenInstance.value);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

sendMessageBtn.onclick = function () {
    var xhttp = new XMLHttpRequest();
    // handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
        } else {
            readonlyText.textContent = "Something went wrong!";
        }
    };
    // request
    // POST {{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}
    xhttp.open("POST", apiUrl +
        "/waInstance" +
        inputIdInstance.value +
        "/sendMessage/"
        + inputApiTokenInstance.value);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{ \"chatId\": \"" + inputMessageNumber.value
        + "@c.us\", \"message\":\"" + textareaMessage.value + "\" }");
}

sendFileByUrlBtn.onclick = function () {
    console.log("{ \"chatId\": \"" + inputFileUrlNumber.value
        + "@c.us\", \"urlFile\":\"" + inputFileUrl.value + "\" }");
    var xhttp = new XMLHttpRequest();
    // handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
        } else {
            readonlyText.textContent = "Something went wrong! Status: " + this.status;
        }
    };
    // request
    // POST {{apiUrl}}/waInstance{{idInstance}}/sendFileByUrl/{{apiTokenInstance}}
    xhttp.open("POST", apiUrl +
        "/waInstance" +
        inputIdInstance.value +
        "/sendFileByUrl/"
        + inputApiTokenInstance.value);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{ \"chatId\": \"" + inputFileUrlNumber.value
        + "@c.us\", \"urlFile\": \"" + inputFileUrl.value + "\", "
        + "\"fileName\":" + " \"image\", " + "\"caption\": \"image\" }");
}