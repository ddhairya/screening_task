module.exports = (sequelize, Sequelize) => {
  const Campaign = sequelize.define("campaigns", {
    title: {
      type: Sequelize.STRING
    },
    email: {
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
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  return Campaign;
};
