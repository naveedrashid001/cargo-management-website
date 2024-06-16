const express = require("express");
const router = express.Router();
const Controller = require("../controller/controler");
// const attentaction =require("../attentication/form_attentaction")

router.post('/', Controller.Delivery_Person);
router.post("/sign_up", Controller.Reciver);

// attentaction.form_data, 
module.exports = router;
