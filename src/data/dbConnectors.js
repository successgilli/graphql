import mongoose from "mongoose";
import Sequelize from "sequelize";
import _ from "lodash";
import casual from "casual";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/friends");

const friendSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  language: {
    type: String,
  },
  email: {
    type: String,
  },
  contacts: {
    type: Array,
  },
});

//SQLite

const sequelize = new Sequelize("database", null, null, {
  dialect: "sqlite",
  storage: "./aliens.sqlite",
});

const Aliens = sequelize.define("Aliens", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING },
});

Aliens.sync({ force: true }).then(() => {
  _.times(10, (i) => {
    Aliens.create({
      firstName: casual._first_name(),
      lastName: casual._last_name(),
      planet: casual._word(),
    });
  });
});

const Friends = mongoose.model("friends", friendSchema);

export { Friends, Aliens }
