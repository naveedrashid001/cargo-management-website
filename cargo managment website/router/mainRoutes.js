const express = require("express");
const router = express.Router();
const Controller = require("../controller/controler");

router.post('/', Controller.Delivery_Person);
router.post("/reciver", Controller.Reciver);

module.exports = router;
