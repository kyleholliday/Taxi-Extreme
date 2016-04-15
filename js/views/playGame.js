module.exports = Backbone.View.extend({
    initialize: function() {
        this.model.on('change:xSpot change:ySpot change:energy change:energyX change:energyY', this.render, this);
    },
    events: {
        'click #up-button': 'goUp',
        'click #down-button': 'goDown',
        'click #left-button': 'goLeft',
        'click #right-button': 'goRight',
    },
    template: _.template(document.getElementById('play-game-template').textContent),

    render: function() {
        var page = this.template({
            name: this.model.get('name'),
            xSpot: this.model.get('xSpot'),
            ySpot: this.model.get('ySpot'),
            energy: this.model.get('energy'),
            energyX: this.model.get('energyX'),
            energyY: this.model.get('energyY'),
            podNumber: this.model.get('podNumber'),
        });
        this.el.innerHTML = page;
        //GAME OVER
        if (this.model.get('energy') === 0) {
            alert('GAME OVER - NO MORE ENERGY');
        }
    },
    goUp: function() {
        this.model.goUp();
        if (this.model.get('xSpot') === this.model.get('energyX') && this.model.get('ySpot') === this.model.get('energyY')) {
            this.model.energyBoost();
        }
    },
    goDown: function() {
        this.model.goDown();
        if (this.model.get('xSpot') === this.model.get('energyX') && this.model.get('ySpot') === this.model.get('energyY')) {
            this.model.energyBoost();
        }
    },
    goLeft: function() {
        this.model.goLeft();
        if (this.model.get('xSpot') === this.model.get('energyX') && this.model.get('ySpot') === this.model.get('energyY')) {
            this.model.energyBoost();
        }
    },
    goRight: function() {
        this.model.goRight();
        if (this.model.get('xSpot') === this.model.get('energyX') && this.model.get('ySpot') === this.model.get('energyY')) {
            this.model.energyBoost();
        }
    },
});