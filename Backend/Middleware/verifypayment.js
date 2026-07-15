const crypto = require("crypto");

const verifyPayment = (req, res, next) => {

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const generated_signature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_SECRET
      )
      .update(
        razorpay_order_id +
        "|" +
        razorpay_payment_id
      )
      .digest("hex");

    if (
      generated_signature !==
      razorpay_signature
    ) {

      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
      console.log("Payment failed");
    }
    next();

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
    });
  }
};
module.exports = verifyPayment;

