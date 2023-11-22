module.exports = (sequelize, Sequelize) => {
  const Campaign = sequelize.define("campaigns", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    recursive: {
      type: Sequelize.BOOLEAN
    },
    frequency: {
      type: Sequelize.STRING
    }
  });

  return Campaign;
};
