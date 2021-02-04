import mongoose from "mongoose";

import { Friends, Aliens } from "./dbConnectors";

export const resolvers = {
  Mutation: {
    createFriend: (_, { input }) => {
      const newfriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        age: input.age,
        gender: input.gender,
        language: input.language,
        email: input.email,
        contacts: input.contacts,
      });

      newfriend.id = newfriend._id;

      return new Promise((resolve, reject) => {
        newfriend.save((err) => {
          if (err) reject(err);
          else {
            resolve(newfriend);
          }
        });
      });
    },
    updateFriend: (_, { input }) => {
      return new Promise((resolve, reject) => {
        Friends.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, friend) => {
            if (err) reject(err);
            else resolve(friend);
          }
        );
      });
    },
    deleteFriend: (_, { id }) => {
      return new Promise((resolve, reject) => {
        Friends.remove(
          { _id: id },
          (err) => {
            if (err) reject(err);
            else resolve('successfully deleted friend!');
          }
        );
      });
    },
  },
  Query: {
    getFriend: (_, { id }) => {
      return new Promise((resolve, reject) => {
        Friends.findById(id, (err, friend) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    getAliens: () => {
      return Aliens.findAll()
    }
  },
};
