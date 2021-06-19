exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  // console.log("ssss", req)
  const response = {
    sucess: true,
    user: req.user,
  }
  res.status(200).send(response);
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

const User = require('../models/user.model.js');
const { user } = require('../models/index.js');
const { paginatedResults } = require('../middlewares/pagination.js');



exports.findAll = async (req, res) => {
  const search = (req.query.search)
  console.log(search);
  //let www
  if (search) {

    const www = User.find({
      $or: [{ 'username': { $regex: '.*' + search + '.*' } },
      { 'lastname': { $regex: '.*' + search + '.*' } },
      { 'email': { $regex: '.*' + search + '.*' } }
      ]
    }
      , (err, result) => {

        console.log(result);
        res.send(result)

      }


    );

  }

  else {
    const data = await paginatedResults(User, req)
    await console.log(data);
    await res.send(data);
  }
};