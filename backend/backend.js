const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");


const app = express();
app.use(bodyParser.json());

app.use(cors());



// Configure bodyParser to parse JSON data


// Connect to MongoDB database
mongoose.connect('mongodb+srv://new_user_fa:abcd1234@foodwasteappcluster.agzjn6e.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
// Define a schema for your data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Define a model for your data
const User = mongoose.model('User', userSchema);

// Define an API endpoint to receive user data
app.get('/test', (req, res) => {   
    res.send("Hello World");
}
);

app.post('/api/users', async (req, res) => {
    const userData = req.body;
    console.log(userData)
    const user = new User(userData);
    let userResolved = await user.save();
    res.send(userResolved);
});

// Start the server
app.listen(5000, () => {
    console.log('Server started on port 5000');
});
