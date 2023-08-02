const user = require("../model/user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { Name, email, password } = req.body;
    if (!Name || !email || !password) {
      res.status(400).json({
        message: "please fill all field",
      });
    } else {
      const hPassword = await bcrypt.hash(password, 10);
      const users = await user.create({
        Name: Name,
        email: email,
        password: hPassword,
        role: req.body.role,
      });
      console.log(users);
      res.status(200).json({
        message: "register user succussfully",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "please fill all fields",
      });
    } else {
      const users = await user.findOne({
        email: req.body.email,
      });
      if (!users) {
       return res.status(400).json({
          message: "you are not Registerd",
        });
      }
      const isMatch = await bcrypt.compare(req.body.password, users.password);
      if (isMatch) {
        var token = jwt.sign({ foo: "bar" }, "shhhhh");
       return res.status(200).json({
          message: "login succussfully",
          data: users,
          tokan: token,
        });
      } else {
       return res.status(200).json({
          message: "some-thing went wrong",
        })
      }
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { register, login };
