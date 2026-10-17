const userdata = require("../Database/user_autentication");

const signup = (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  const existuser = userdata.find((item) => {
    return item.email == email;
  });
  if(existuser){
    res.json("user already exist ")
  }else{
  userdata.push(data)
  res.json("account made scuucesfully")
  }
};
module.exports = signup;
