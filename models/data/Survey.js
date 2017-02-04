/**
 * Created by pi on 7/21/16.
 */
/**
 * Created by pi on 7/21/16.
 */
var modelBase = require('../ModelBase');

var properties = {
    userId: modelBase.Sequelize.STRING,
    address: modelBase.Sequelize.STRING,
    productIdent: modelBase.Sequelize.STRING,
    productName: modelBase.Sequelize.STRING,
    isOnTime: modelBase.Sequelize.BOOLEAN,
    actualWeight:modelBase.Sequelize.DECIMAL,
    targetWeight:modelBase.Sequelize.DECIMAL
};

var Survey = modelBase.define('Survey', properties);

console.log('Survey executed');
module.exports = Survey;