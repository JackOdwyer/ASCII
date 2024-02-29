function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var clock = 
        // Hours
        (hours < 10 ? "0" : "") + hours + ":" +
        // Minutes
        (minutes < 10 ? "0" : "") + minutes + ":" +
        // Seconds
        (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("clock").innerText = clock;
}

setInterval(updateClock, 1000);

