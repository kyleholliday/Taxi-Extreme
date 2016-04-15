window.addEventListener('load', function() {
    var MainRouter = require('./router');

    var router = new MainRouter();
    Backbone.history.start();
    router.navigate();
});