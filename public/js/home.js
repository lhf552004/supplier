/**
 * Created by Operator on 2/4/2017.
 */
$(function () {
    $("form").submit(function (event) {
        console.log('prevent event');
        event.preventDefault();
        var surveyInfo = {
            address: $('#address').val().trim(),
            state: parseInt($('#state').val()),
            isOnTime: $('#isOnTime').prop('checked'),
            productIdent: $('#productIdent').val().trim(),
            productName: $('#productName').val().trim(),
            targetWeight: parseFloat($('#targetWeight').val()).toFixed(2),
            actualWeight: parseFloat($('#actualWeight').val()).toFixed(2)
        };
        console.log('Job info: ');
        console.dir(surveyInfo);
        $.post('/survey', surveyInfo, function (data) {
            console.log(data);
            if(data && data.needLogin == true){
                window.location.replace("/login");
            }
            else{
                location.reload();
            }
        });
    });
})