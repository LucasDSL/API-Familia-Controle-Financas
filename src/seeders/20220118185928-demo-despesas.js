"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Despesas",
      [
        {
          descricao: "PS5 - Um console muito daora",
          valor: 4399.99,
          data: new Date("2022-01-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Xbox Series X - Um console muito daora",
          valor: 5000.00,
          data: new Date("2022-01-02"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Mouse Razer",
          valor: 210.99,
          data: new Date("2021-10-10"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Garrafa Tupperware",
          valor: 31.99,
          data: new Date("2017-07-25"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Filtro de Barro",
          valor: 99.99,
          data: new Date("1999-07-19"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
