const gamesRouter = require("express").Router()

    const getAllGames = async (req, res) => {
        //функционал на получение игр
    };

    gamesRouter.get("/games", getAllGames);

    module.exports = gamesRouter;
