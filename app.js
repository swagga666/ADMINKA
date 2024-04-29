const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Приложение запущено тут: http://localhost:${PORT}");
});

app.get('/', (req, res) => {
     res.send("<h1>0, zagolovok!<h1>")
});