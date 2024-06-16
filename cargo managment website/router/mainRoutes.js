const express = require("express");
const router = express.Router();
const Controller = require("../controller/controler");
// const attentaction =require("../attentication/form_attentaction")

router.post('/', Controller.Delivery_Person);
router.post("/reciver", Controller.Reciver);

// app.get('/delivery_person', controller.Delivery_Person);
// app.post('/reciver', controller.Reciver);

// attentaction.form_data, 
module.exports = router;
