"use strict";

const defaultPassword = "$2b$10$7w0TuTBS0pU10ZMBCHjzneP78Il6ckHa0MCyNknmdJk56lKg3o1QC"
const avatar = {"sex":"man","faceColor":"#F9C9B6","earSize":"small","eyeStyle":"circle","noseStyle":"round","mouthStyle":"laugh","shirtStyle":"short","glassesStyle":"round","hairColor":"#000","hairStyle":"thick","hatStyle":"none","hatColor":"#D2EFF3","eyeBrowStyle":"up","shirtColor":"#6BD9E9","bgColor":"linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)"}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        username: "test@gmail.com",
        email: "test@gmail.com",
        firstName: "Test",
        lastName: "User",
        password: null,
        avatar: null,
        loginType: "local",
        token: "test",
        isBot: false,
      },
      {
        id: 2,
        firstName: "Darren",
        lastName: "Liu",
        username: "darren.liu@emory.edu",
        email: "darren.liu@emory.edu",
        password: defaultPassword,
        avatar: JSON.stringify(avatar),
        loginType: "local",
        token: null,
        isBot: false,
      },
      {
        id: 3,
        firstName: "Asuka",
        lastName: "Li",
        username: "asuka.li@emory.edu",
        email: "asuka.li@emory.edu",
        password: defaultPassword,
        avatar: null,
        loginType: "local",
        token: null,
        isBot: false,
      },
      {
        id: 4,
        firstName: "Del",
        lastName: "Bold",
        username: "del@gmail.com",
        email: "del@gmail.com",
        password: defaultPassword,
        avatar: null,
        loginType: "local",
        token: null,
        isBot: false,
      },
      {
        id: 5,
        firstName: "Cheng",
        lastName: "Ding",
        username: "cheng.ding2@emory.edu",
        email: "cheng.ding2@emory.edu",
        password: defaultPassword,
        avatar: null,
        loginType: "local",
        token: null,
        isBot: false,
      },
      {
        id: 6,
        firstName: "Xiao",
        lastName: "Hu",
        username: "xiao.hu@emory.edu",
        email: "xiao.hu@emory.edu",
        password: defaultPassword,
        avatar: null,
        loginType: "local",
        token: null,
        isBot: false,
      },
      {
        id: 7,
        firstName: "Ran",
        lastName: "Xiao",
        username: "ran.xiao@emory.edu",
        email: "ran.xiao@emory.edu",
        password: defaultPassword,
        avatar: null,
        loginType: "local",
        token: null,
        isBot: false,
      },
      {
        id: 8,
        firstName: "Kaitlyn",
        lastName: "Marie",
        username: "kaitlyn.marie.bateh@emory.edu",
        email: "kaitlyn.marie.bateh@emory.edu",
        password: defaultPassword,
        avatar: null,
        loginType: "local",
        token: null,
        isBot: false,
      },
      {
        id: 9,
        firstName: "Stark",
        lastName: "Guo",
        username: "zhicheng.guo@duke.edu",
        email: "zhicheng.guo@duke.edu",
        password: null,
        avatar: null,
        loginType: "local",
        token: null,
        isBot: false,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
