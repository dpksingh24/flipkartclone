const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IAupsF7Bl6cVbUL1B3PgtZROrEEVmKB9NmeHXXFMOFF4zTfMfIGZBbJYVlnuIbFQEoybLc0giDOHhAUP1XA5gLn00aJrKN2Tl');

// API 

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true}));
    // Allow us to send API in json format
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request received ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        // subunits of the currency
        amount: total, 
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/cloneamzon/us-central1/api