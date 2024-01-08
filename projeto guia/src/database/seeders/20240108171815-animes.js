"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "animes",
      [
        {
          id: 1,
          name: "Naruto",
          ano: 2002,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Jujutsu kaisen",
          ano: 2002,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Jojo",
          ano: 2002,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: "SouSou no freiren",
          ano: 2002,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: "kimetsu",
          ano: 2002,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: "blue lock",
          ano: 2002,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      null,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("animes", null, {});
  },
};
