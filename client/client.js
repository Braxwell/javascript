const ws = new WebSocket("ws://127.0.0.1:8080/chat?pseudo=NOM", "http");

ws.onopen = function (event) {
    console.log("Connecté");
};

ws.onclose = function (event) {
    console.log("Déconnecté");
};

ws.onmessage = function (event) {
    console.log(event.data);
};