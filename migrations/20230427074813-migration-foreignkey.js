'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('allatok', 
        {
          fields: ['kategoriaId'],
          type: 'foreign key',
          name: 'kategoria_fkey',
          references: {
            table: 'kategoriak',
            field: 'id'
          }
    })},

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('allatok', 'kategoria_fkey');
  }
};
