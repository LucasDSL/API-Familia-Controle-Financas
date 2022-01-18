"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Despesas",
      [
        {
          descricao: "Mega sena da virada",
          valor: 378000000.99,
          data: new Date("2022-12-31"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Décimo terceiro 2",
          valor: 10000.99,
          data: new Date("2022-12-20"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Venda de NFT",
          valor: 500000.99,
          data: new Date("2022-12-04"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Rendimentos dos investimentos",
          valor: 15.99,
          data: new Date("2022-12-31"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Venda de sanduíches",
          valor: 150,
          data: new Date("2022-12-15"),
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
