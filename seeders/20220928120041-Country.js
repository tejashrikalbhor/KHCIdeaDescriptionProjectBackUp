'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Country', [{
     name: 'Austrila'
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Country', null, {});
     
  }
};
