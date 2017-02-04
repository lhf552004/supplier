/**
 * Created by Operator on 8/4/2016.
 */
var Promise = require('promise');

//------------------------------------
//Module
var Survey = require('./data/Survey');

var GroupUser = require('./um/GroupUser');
var UserGroup = require('./um/UserGroup');
var User = require('./um/User');
var AccessRight = require('./um/AccessRight');

UserGroup.sync().then(function () {

    User.sync().then(function () {
        GroupUser.sync();

    });
    AccessRight.sync().then(function () {

    });
});
Survey.sync().then(function () {
});
