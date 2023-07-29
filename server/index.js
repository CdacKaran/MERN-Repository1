const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const UserModel = require('./models/User')
const app = express();
app.use(express.json())
const PORT = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());


// Connect to the database.
mongoose.connect("mongodb://127.0.0.1:27017/MERN");

// Create the schema for the prices table.
const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    category: String,
    label: String,
    price: Number,
    description: String
});



// Get all the prices.
app.get("/prices", (req, res) => {
    UserModel.find({})
    .then(users=> res.json(users))
    .catch(err => res.json(err))
    console.log(err)
})

//Add items
app.post("/CreateItem", (req, res) => {
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err => res.json(err))
    console.log(err)
})

app.get("/getItem/:Id", (req, res) => {
    const Id = req.params.Id;
    UserModel.findById({_id:Id})
    .then(users=> res.json(users))
    .catch(err => res.json(err))
    })

    app.put("/UpdateItem/:Id", (req, res) => {
        const Id = req.params.Id;
        UserModel.findByIdAndUpdate({_id:Id},
            {name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            label: req.body.label,
            price: req.body.price,
            description: req.body.description
        })
        .then(users=> res.json(users))
        .catch(err => res.json(err))
        })

// // Update a price.
// app.put("/prices/:id", (req, res) => {
//     const id = req.params.id;
//     const price = Prices.findById(id);
//     if (!price) {
//         res.status(404).json({ message: "Price not found" });
//         return;
//     }
//     price.name = req.body.name;
//     price.category = req.body.category;
//     price.price = req.body.price;
//     price.save((err, price) => {
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.json(price);
//         }
//     });
// });

// // Delete a price.
// app.delete("/prices/:id", (req, res) => {
//     const id = req.params.id;
//     const price = Prices.findByIdAndDelete(id);
//     if (!price) {
//         res.status(404).json({ message: "Price not found" });
//         return;
//     }
//     res.json(price);
// });

app.listen(5000, () => {
    console.log("Server running on port 5000");
})