const Userauth = require("../model/userauthmodel");

const usercontroller = async (req, res) => {
  try {
    const email = req.query.email;

    if (!email) {
      return res.status(400).json({
        succ: false,
        msg: "Email is required",
      });
    }

    const user = await Userauth.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        succ: false,
        msg: "User not found",
      });
    }

    res.status(200).json({
      succ: true,
      user: {
        name: user.name,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      succ: false,
      msg: "Server error",
    });
  }
};

module.exports = usercontroller;
