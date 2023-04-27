'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('allatok', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nev: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      becenev: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      eletkor: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      szarmazas: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      taplalek: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      kategoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      kepUrl: {
        type: Sequelize.STRING
      }     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('allatok');
  }
};