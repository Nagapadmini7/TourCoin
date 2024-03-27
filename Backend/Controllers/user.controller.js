// const User = require("../models/User");
const userDetail = require("../Models/userDetail");

const CreateUser = (req, res) => {
  const { uid, name, email, displayPicture } = req.body;

  const newUser = new userDetail({
    uid: uid,
    name: name,
    email: email,
  });
  userDetail.findOne({ uid: uid }, (error, user) => {
    if (error) {
      return res
        .status(200)
        .json({ message: error.message, success: "true", data: " " });
    }
    if (!user) {
      newUser
        .save()
        .then((result) => {
          return res
            .status(200)
            .json({ message: "User Created", success: "true", data: " " });
        })
        .catch((err) =>
          res.status(200).json({
            message: "Unable to create user",
            success: "false",
            data: " ",
          })
        );
    } else {
      return res
        .status(200)
        .json({ message: "User already exisits", success: "false", data: " " });
    }
  });
};

module.exports = { CreateUser };
