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
    tesla: function() {
        this.model.set('vehicle', 'Tesla');
        this.model.set('energyUsed', 1);
        this.model.set('energy', 10);
        this.model.set('startingEnergy', 10);
    },
    rangerover: function() {
        this.model.set('vehicle', 'Range Rover');
        this.model.set('energyUsed', 2);
        this.model.set('energy', 20);
        this.model.set('startingEnergy', 20);
    }
});