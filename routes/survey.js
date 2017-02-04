/**
 * Created by Operator on 2/4/2017.
 */

var Survey =  require('../models/data/Survey');

module.exports = function (app, i18n) {
    app.post('/survey',isLoggedIn, function (req, res) {

        var userId = req.user.id;
        var address = req.body.address;
        var state = req.body.state;
        var isOnTime = req.body.isOnTime;
        var targetWeight = req.body.targetWeight;
        var productIdent = req.body.productIdent;
        var productName = req.body.productName;
        var info = '';
        var updateInfo = {};
        if (targetWeight) {
            updateInfo.targetWeight = targetWeight;
        }
        if (isOnTime) {
            updateInfo.isOnTime = isOnTime;
        }
        if (productIdent) {
            updateInfo.productIdent = productIdent;
        }
        if (productName) {
            updateInfo.productName = productName;
        }
        console.log('TargetWeight: ' + targetWeight);

        Survey.findOne({
            where: {userId: userId}
        }).then(function (theSurvey) {
            if (theSurvey) {
                theSurvey.update(updateInfo).then(function (updatedSurvey) {
                    info = i18n.__("save successfully");

                    res.json({info: info});
                });
            }else {
                Survey.create(updateInfo).then(function (newJob) {
                    info = i18n.__("create new survey successfully");
                    res.json({info: info});
                });
            }

        });

    });
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){

        console.log('is Authenticated!!!');
        return next();
    }

    res.json({needLogin: true});
    // if they aren't redirect them to the home page
    //res.redirect('/login');
}
