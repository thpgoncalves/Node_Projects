const { Router, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload.js");

const UsersController = require("../controllers/UsersController.js");
const UsersAvatarController = require("../controllers/UserAvatarController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UsersAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;