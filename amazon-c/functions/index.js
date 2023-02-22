const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51MdxKMSI3Nxwo5m402ilmjx3HF7AmN35xXU0fzH28EQ7G5QTUXciuMmFZrH06AIm9shrS7ksnfKliToYpPDYHimf00ZxnuOLUo");

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request received : ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  res.status(201).send({clientSecret: paymentIntent.client_secret});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/c-a1148/us-central1/api
