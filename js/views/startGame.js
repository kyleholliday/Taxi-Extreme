//This will show the user a form to create a new character
module.exports = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        'click #create-player': 'newCharacter',
        'click #tesla': 'tesla',
        'click #rangerover': 'rangerover',
    },
    template: _.template(document.getElementById('new-player-template').textContent),

    render: function() {
        this.el.innerHTML = this.template();
    },

    newCharacter: function() {
        var name = document.getElementById('player-name').value;
        this.model.set('name', name);
    },
});