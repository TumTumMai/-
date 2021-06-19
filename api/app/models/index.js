const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "admin", "moderator"];
db.video = require("./video.model");
db.event = require("./Event.model");
db.image = require("./Image.model");
db.categories = require("./Categories.model");
db.minibooth = require("./Booth.model");
db.brochure = require("./Brochure.model");
db.item = require("./Item.model");
db.basket = require("./Basket.model");

module.exports = db;