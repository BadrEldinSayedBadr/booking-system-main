'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A classic American novel set in the Jazz Age, exploring themes of decadence, idealism, and the American Dream.',
        publication_year: 1925,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Great_gatsby_74.jpg'
      },
      {
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian social science fiction novel about totalitarian surveillance and thought control.',
        publication_year: 1949,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Nineteen_Eighty_Four.jpg'
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A coming-of-age story dealing with racial inequality and loss of innocence in the American South.',
        publication_year: 1960,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg/500px-To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg'
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A romantic novel of manners that follows the character development of Elizabeth Bennet.',
        publication_year: 1813,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg'
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'A controversial novel about teenage rebellion and alienation in post-war America.',
        publication_year: 1951,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/en/7/74/RebelInTheRye.jpeg'
      },
      {
        title: 'Lord of the Flies',
        author: 'William Golding',
        description: 'A story about a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.',
        publication_year: 1954,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/en/0/02/Lord_of_the_Flies_%281990_film%29.jpg'
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'A fantasy novel about the adventures of Bilbo Baggins in Middle-earth.',
        publication_year: 1937,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/The_Hobbit_trilogy_dvd_cover.jpg'
      },
      {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        description: 'A dystopian novel about a future American society where books are outlawed and "firemen" burn any that are found.',
        publication_year: 1953,
        cover_image_url: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Fahrenheit_451.png'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};

