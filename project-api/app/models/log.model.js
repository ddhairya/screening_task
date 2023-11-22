module.exports = (sequelize, Sequelize) => {
  const log = sequelize.define("logs", {
    title: {
      type: Sequelize.STRING
    },
    campiagn_id: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return log;
};
