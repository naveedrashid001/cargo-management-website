const mongoose = require('mongoose');
const db = mongoose.connection;

module.exports = {
    Delivery_Person: async (req, res) => {
        res.set({
            "Allow-access-Allow-Origin": '*'
        });
        return res.redirect('index.html');
    },
    Reciver: (req, res) => {
        var name = req.body.name;
        var age = req.body.age;
        var email = req.body.email;
        var mobile = req.body.mobile;
        var gender = req.body.gender;
        var password = req.body.password;

        var data = {
            "name": name,
            "age": age,
            "email": email,
            "mobile": mobile,
            "gender": gender,
            "password": password
        };

        db.collection('users').insertOne(data, (err, collection) => {
            if (err) {
                throw err;
            }
            console.log("Record Inserted Successfully");
        });

        return res.redirect('signup_successfull.html');
    }
};
