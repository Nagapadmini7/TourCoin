const { error } = require("console");
const crypto = require("crypto");

const secret = "padmini_mam_op";
const base64Decoder = function (req, res, next) {
  if (req.body.data) {
    try {
      var b = Buffer.from(req.body.data, "base64").toString();
      b = JSON.parse(b);
      req.body = b;
      console.log(b);
      console.log("Happy Happy!");
      next();
    } catch (error) {
      // console.log(error);
      res.status(400).json({ error: "Invalid base64 data format" });
    }
  } else {
    res.status(400).json({ error: "Missing base64 data in request body" });
  }
};

const md5HashVerifier = function (req, res, next) {
  const { hash, salt, input, timestamp } = req.body;
  const inputString = JSON.stringify(input);

  const combinedString = salt + inputString + timestamp + secret;
  let timestamp_n = Date.now();
  console.log(timestamp_n);
  console.log(timestamp);
  let sub = (timestamp_n - timestamp) / 10000;
  if (sub > 4000) {
    console.log(hash, salt, input, timestamp);
    console.log(sub);
    console.log("expired");
    return res.status(200).json({ success: false, message: "Expired" });
  } else {
    console.log("Not Expired🫡.");
  }
  let myhash = crypto.createHash("md5").update(combinedString).digest("hex");
  console.log(hash);
  console.log(myhash);

  if (hash === myhash) {
    req.body = input;
    return next();
  } else {
    return next(
      res.status(401).json({ success: false, message: "Auth failed" })
    );
  }
};

module.exports = { base64Decoder, md5HashVerifier };
