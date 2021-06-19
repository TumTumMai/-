const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
const emailToValidate = "a@a.com";
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// console.log(emailRegexp.test(emailToValidate));

const validateRegistry = async (args) => {
  const errors = [];
  console.log(args);
  if (args.password !== args.confrimpassword) {
    errors.push({ key: "password", message: "*password in wrong" });
  }
  if (!args.username) {
    errors.push({ key: "username", message: "*ไม่สามารถใช้ตัวอักษรได้" });
  }

  if (!args.lastname) {
    errors.push({ key: "lastname", message: "*ไม่สามารถใช้ตัวอักษรได้" });
  }

  if (args.password == null) {
    errors.push({ key: "password", message: "*password in null" });
  }

  if (args.email == null) {
    errors.push({ key: "email", message: "*email in null" });
  }

  if (emailRegexp.test(args.email) != true) {
    errors.push({ key: "email", message: "email in .com" });
  }

  if (!args.birthday) {
    errors.push({ key: "birthday", message: "*birthday in null" });
  }
  // const emailToValidate = 'a@a.com';
  // const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  // console.log(emailRegexp.test(emailToValidate));

  // if()

  const UserExist = await User.findOne({ email: args.email });
  if (UserExist) {
    errors.push({ key: "email", message: "*อีเมลนี้ไม่สามารถใช้งานได้" });
  }

  return errors;
};

module.exports = { validateRegistry };
