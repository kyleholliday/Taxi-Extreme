module.exports = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        'click #newgame': 'new',
    },
    template: _.template(document.getElementById('game-over-template').textContent),

    render: function() {
        var game = this.template({
            name: this.model.get('name'),
            score: this.model.get('podNumber'),
        });
        this.el.innerHTML = game;
    },
    new: function() {
        window.location.reload();
        Backbone.history.navigate('#/new');

    },
});