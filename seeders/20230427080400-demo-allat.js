'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('allatok', 
    [
      {
          "nev": "Gímszarvas",
          "becenev": "Gombi",
          "eletkor": "10 év",
          "szarmazas": "Európa",
          "taplalek": "Lágy szárú növények, a bokrok és fák rügyei",
          "kategoriaId": 1,
          "kepUrl": "/img-animal/gímszarvas.jpg",
      },
      {
          "nev": "Hullámos papagáj",
          "becenev": "Arász",
          "eletkor": "5 év",
          "szarmazas": "Ausztrália",
          "taplalek": "Fűmagvak, kedvence a köles",
          "kategoriaId": 2,
          "kepUrl": "/img-animal/hullamospapagaj.jpg",
      },
      {
          "nev": "Indiai elefánt",
          "becenev": "Bence",
          "eletkor": "26 év",
          "szarmazas": "India",
          "taplalek": "Füvet, fakérget, gyökeret és gyümölcsöt eszik",
          "kategoriaId": 1,
          "kepUrl": "/img-animal/indiaielefant.jpg",
      },
      {
          "nev": "Jegesmedve",
          "becenev": "Lackó",
          "eletkor": "14 év",
          "szarmazas": "Északi Sarkvidék",
          "taplalek": "Húsevő, kedvenc prédája a fókák",
          "kategoriaId": 1,
          "kepUrl": "/img-animal/jegesmedve.jpg",
      },
      {
          "nev": "Kanadai hiúz",
          "becenev": "Kancsi",
          "eletkor": "10 év",
          "szarmazas": "Észak Amerika, Kanada",
          "taplalek": "Húsevő, prédája a hócipős nyúl",
          "kategoriaId": 1,
          "kepUrl": "/img-animal/kanadaihiúz.jpg",
      },
      {
          "nev": "Leopárd",
          "becenev": "Foltos",
          "eletkor": "8 év",
          "szarmazas": "Dél Afrika",
          "taplalek": "Húsevő, gyakran eszik bogarakat, rágcsálókat és halakat",
          "kategoriaId": 1,
          "kepUrl": "/img-animal/leopard.jpg",
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('allatok', null, {});
  }
};
