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
    let response = await fetch(url);
    let json = await response.json();
    return JSON.stringify(json, null, 2);
}

// POST
async function postRequest(url, body) {
    console.log(body);

    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return JSON.stringify(await response.json(), null, 2)
}

// listeners
btnGetSettingsBtn.onclick = async () => {
    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/getSettings/${inputApiTokenInstance.value}`;
    readonlyText.textContent = await getRequest(url)
}

getStateInstanceBtn.onclick = async () => {
    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/getStateInstance/${inputApiTokenInstance.value}`;
    readonlyText.textContent = await getRequest(url)
}

sendMessageBtn.onclick = async () => {
    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/sendMessage/${inputApiTokenInstance.value}`;
    readonlyText.textContent = await postRequest(url, {
        chatId: `${inputMessageNumber.value}@c.us`,
        message: `${textareaMessage.value}`
    })
}

sendFileByUrlBtn.onclick = async () => {
    let url = `https://api.green-api.com/waInstance${inputIdInstance.value}/sendFileByUrl/${inputApiTokenInstance.value}`;
    readonlyText.textContent = await postRequest(url, {
        chatId: `${inputFileUrlNumber.value}@c.us`,
        urlFile: `${inputFileUrl.value}`,
        fileName: "img",
        caption: "img"
    })
}