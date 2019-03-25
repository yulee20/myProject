
module.exports = function () {
    this.setDefaultTimeout(180 * 1000);

    this.Before({ tags: ['@skip'] }, (scenario, callback) => {
        callback(null, 'pending');
    });


    this.After(function (scenario) {
    });

};