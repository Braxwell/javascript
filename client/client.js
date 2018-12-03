const ws = new WebSocket("ws://127.0.0.1:8080/chat?pseudo=Kaaris", "http");

ws.onopen = function () {
    console.log("Connecté");
    ws.send("Tchoin, tchoin, tchoin !");
};

ws.onclose = function () {
    console.log("Déconnecté");
};

ws.onmessage = function (event) {
    console.log(event.data);
};