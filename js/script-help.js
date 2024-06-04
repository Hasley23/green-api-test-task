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

// GET
async function getRequest(url) {
    let response = await fetch(url)
        .catch(e => {
            readonlyText.textContent = "Failed to get response!";
            console.error(e);
        });

    let responseJson = await response.json()
        .catch(e => {
            readonlyText.textContent = "Failed to get JSON!";
            console.error(e);
        });

    readonlyText.textContent = JSON.stringify(responseJson, null, 2);
}

// POST
async function postRequest(url, msg) {
    // async post
    return fetch(url, {
        method: "POST", // GET, PUT, DELETE
        body: JSON.stringify(msg),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log(JSON.stringify(data, null, 2))
            return data;
        })
}

// listeners
btnGetSettingsBtn.onclick = async () => {
    // OLD CODE
    // var xhttp = new XMLHttpRequest();
    // // handle response
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
    //     } else {
    //         readonlyText.textContent = "Something went wrong!";
    //     }
    // };
    // // request
    // // GET {{apiUrl}}/waInstance{{idInstance}}/getSettings/{{apiTokenInstance}}
    // xhttp.open("GET", apiUrl +
    //     "/waInstance" +
    //     inputIdInstance.value +
    //     "/getSettings/" +
    //     inputApiTokenInstance.value);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send();

    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/getSettings/${inputApiTokenInstance.value}`;
    getRequest(url);
}

getStateInstanceBtn.onclick = async () => {
    // OLD CODE
    // var xhttp = new XMLHttpRequest();
    // // handle response
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
    //     } else {
    //         readonlyText.textContent = "Something went wrong!";
    //     }
    // };
    // // request
    // xhttp.open("GET", apiUrl +
    //     "/waInstance" +
    //     inputIdInstance.value +
    //     "/getStateInstance/" +
    //     inputApiTokenInstance.value);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send();
    // fetch(url).then((response) => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw new Error('Something went wrong');
    // }).then((responseJson) => {
    //     // Do something with the response
    // }).catch((error) => {
    //     console.log(error)
    // });

    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/getStateInstance/${inputApiTokenInstance.value}`;
    getRequest(url);
}

sendMessageBtn.onclick = async () => {
    // var xhttp = new XMLHttpRequest();
    // // handle response
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
    //     } else {
    //         readonlyText.textContent = "Something went wrong!";
    //     }
    // };
    // // request
    // xhttp.open("POST", apiUrl +
    //     "/waInstance" +
    //     inputIdInstance.value +
    //     "/sendMessage/"
    //     + inputApiTokenInstance.value);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // let postBody = {
    //     chatId: inputMessageNumber.value + "@c.us",
    //     message: textareaMessage.value
    // }
    // xhttp.send(JSON.stringify(postBody));

    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/sendMessage/${inputApiTokenInstance.value}`;

    let postBody = {
        chatId: inputMessageNumber.value + "@c.us",
        message: textareaMessage.value
    };

    let outJSON = await postRequest(url, postBody);

    readonlyText.textContent = JSON.stringify(outJSON, null, 2);
}

sendFileByUrlBtn.onclick = async () => {
    // console.log("{ \"chatId\": \"" + inputFileUrlNumber.value
    //     + "@c.us\", \"urlFile\":\"" + inputFileUrl.value + "\" }");
    // var xhttp = new XMLHttpRequest();
    // // handle response
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         readonlyText.textContent = JSON.stringify(JSON.parse(this.response), null, 2);
    //     } else {
    //         readonlyText.textContent = "Something went wrong! Status: " + this.status;
    //     }
    // };
    // // request
    // // POST {{apiUrl}}/waInstance{{idInstance}}/sendFileByUrl/{{apiTokenInstance}}
    // xhttp.open("POST", apiUrl +
    //     "/waInstance" +
    //     inputIdInstance.value +
    //     "/sendFileByUrl/"
    //     + inputApiTokenInstance.value);

    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send("{ \"chatId\": \"" + inputFileUrlNumber.value
    //     + "@c.us\", \"urlFile\": \"" + inputFileUrl.value + "\", "
    //     + "\"fileName\":" + " \"image\", " + "\"caption\": \"image\" }");

    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/sendFileByUrl/${inputApiTokenInstance.value}`;

    let postBody = {
        chatId: inputFileUrlNumber.value + "@c.us",
        urlFile: inputFileUrl.value,
        fileName: "image",
        caption: "image"
    };

    let outJSON = await postRequest(url, postBody);

    readonlyText.textContent = JSON.stringify(outJSON, null, 2);
}




// С форума
async function fetching(url) {
    await fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
        .then((responseJson) => {
            // Do something with the response
        })
        .catch((error) => {
            console.log(error)
        });
}