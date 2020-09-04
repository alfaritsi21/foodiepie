const bcrypt = require("bcrypt");
const helper = require("../helper");
const jwt = require("jsonwebtoken");
const { postUser, checkUser } = require("../model/users");

const checkPassword = (user_password) => {
  let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (user_password.match(decimal)) {
    return true;
  } else {
    return false;
  }
};

const validateEmail = (user_email) => {
  let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (user_email.match(valid)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  registerUser: async (request, response) => {
    const { user_email, user_password, user_name } = request.body;
    if (!validateEmail(user_email)) {
      return helper.response(response, 400, "Invalid Email");
    }

    if (!checkPassword(user_password)) {
      return helper.response(
        response,
        400,
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
      );
    }

    const salt = bcrypt.genSaltSync(10);
    const encryptPassword = bcrypt.hashSync(user_password, salt);
    // console.log(`user Password = ${user_password}`);
    // console.log(`user Password Bcrypt = ${encryptPassword}`);
    // kondisi jika email sama tidak bisa
    const setData = {
      user_email,
      user_password: encryptPassword,
      user_name,
      user_role: 2,
      user_status: 0,
      user_created_at: new Date(),
    };
    try {
      const result = await postUser(setData);
      return helper.response(response, 200, "Success Register User", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request");
    }
  },
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body;
      // console.log(user_email);
      const checkDataUser = await checkUser(user_email);
      if (checkDataUser.length >= 1) {
        //proses 2 = set Password
        const checkPassword = bcrypt.compareSync(
          user_password,
          checkDataUser[0].user_password
        );
        if (checkPassword) {
          // proses 3 = set JWT
          const {
            user_id,
            user_email,
            user_name,
            user_role,
            user_status,
          } = checkDataUser[0];
          let payload = {
            user_id,
            user_email,
            user_name,
            user_role,
            user_status,
          };
          const token = jwt.sign(payload, "RAHASIA", { expiresIn: "24h" });
          payload = { ...payload, token };
          return helper.response(response, 200, "Success Login !", payload);
        } else {
          return helper.response(response, 400, "Wrong Password !");
        }
      } else {
        return helper.response(
          response,
          400,
          "Email / Account not registered !"
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request");
    }
  },
};
