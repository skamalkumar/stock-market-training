/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const functions = require("firebase-functions");
const Razorpay = require("razorpay");

// ⚡ Add your Razorpay Keys (use test keys for now)
const razorpay = new Razorpay({
  key_id: "YOUR_RAZORPAY_KEY_ID",
  key_secret: "YOUR_RAZORPAY_SECRET",
});

// Cloud Function: create Razorpay order
exports.createOrder = functions.https.onRequest(async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // amount in paise (INR × 100)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating Razorpay order");
  }
});

// Set global options for all functions
setGlobalOptions({maxInstances: 10});
