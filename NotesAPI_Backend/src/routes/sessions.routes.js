const { Router } = require("express");

const SessionsColtroller = require("../controllers/SessionsController");
const sessionController = new SessionsColtroller();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionController.create);

module.exports = sessionsRoutes;