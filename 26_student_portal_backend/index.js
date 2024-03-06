// Setup express server
const express = require('express');
const app = express();
const port = 3000;

// Enable CORS
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200',

};
app.use(cors(corsOptions));

// used bodyparser ====================
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('connected user', socket.id);

    // Example: Handle chat messages
    socket.on('chat-message', (message) => {
        console.log('Received chat message:', message);
        // Handle the message (broadcast, store in database, etc.)
    });

    // Other socket event handlers can be added as needed.
});



// Imported databsae file
const client = require('./db');
const db = client.db('meanDB');
const collection = db.collection('users');



// ===== Create a new user in Database
app.post('/create-user', async (req, res) => {
    try {
        const data = req.body;

        const result = await collection.insertOne(data);
        console.log("Data inserted successfully:", result);
        res.status(201).json(result);
    } catch (err) {
        console.error("Error in POST :", err);
        res.status(500).send("Internal Server Error");
    }
});

// ===== Login a user
app.post('/login-user', async (req, res) => {
    try {
        const userData = req.body;
        console.log('userData:', userData);

        // find the user in the database
        const result = await collection.findOne(userData);
        console.log("result matched:", result);

        if (result) {

            res.status(200).json({ success: true, message: 'Login successful', user: result });
        } else {

            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {

        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }

});

// ===== Fetch all user record
app.get('/', async (req, res) => {
    const allUsersRecord = await collection.find().toArray();
    console.log("all user data:", allUsersRecord)
    res.send(allUsersRecord);
});


// ====== Get the chat user details =====
app.post('/post/chat-user', async (req, res) => {
    try {
        const userData = req.body;
        console.log('userData', userData);
        const userCollection = db.collection('chat-user');
        const result = await userCollection.insertOne(userData);
        console.log("Data inserted successfully:", result);
        res.status(201).json(result);
    } catch (err) {
        console.log('Error in chat user', err);
        res.status(500).send("Internal Server Error");
    }

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});





