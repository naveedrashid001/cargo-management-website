const mongoose = require('mongoose');
const db = mongoose.connection;

module.exports = {
    Delivery_Person: async (req, res) => {
        res.set({
            "Access-Control-Allow-Origin": '*'
        });
        return res.redirect('index.html');
    },
    Reciver: (req, res) => {
        var { origin, destination, weight, date } = req.body;

        var data = {
            "origin": origin,
            "destination": destination,
            "weight": weight,
            "date": date
        };

        db.collection('deliveries').insertOne(data, (err, collection) => {
            if (err) {
                throw err;
            }
            console.log("Record Inserted Successfully");
        });
         return res.redirect('reciver.html');
    }
};
