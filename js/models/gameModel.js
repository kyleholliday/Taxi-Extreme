module.exports = Backbone.Model.extend({
    initialize: function() {
        this.name = null;
    },
    defaults: {
        xSpot: Math.round(Math.random() * 10),
        ySpot: Math.round(Math.random() * 10),
        boardMax: 10,
        boardMin: 0,
        energy: 20,
        name: 'Billy',
        energyUsed: 1,
        startingEnergy: 10,
        podNumber: 0,
        energyX: Math.round(Math.random() * 10),
        energyY: Math.round(Math.random() * 10),
    },
    using: function() {
        this.set('energy', this.get('energy') - this.get('energyUsed'));
    },

    goUp: function() {
        if (this.get('ySpot') < this.get('boardMax')) {
            this.set('ySpot', this.get('ySpot') + 1);
            this.using();
        } else {
            console.log('Nope!');
        }
    },
    goDown: function() {
        if (this.get('ySpot') > this.get('boardMin')) {
            this.set('ySpot', this.get('ySpot') - 1);
            this.using();
        } else {
            console.log('Nope!');
        }
    },
    goRight: function() {
        if (this.get('xSpot') < this.get('boardMax')) {
            this.set('xSpot', this.get('xSpot') + 1);
            this.using();
        } else {
            console.log('Nope!');
        }
    },
    goLeft: function() {
        if (this.get('xSpot') > this.get('boardMin')) {
            this.set('xSpot', this.get('xSpot') - 1);
            this.using();
        } else {
            console.log('Nope!');
        }
    },
    energyBoost: function() {
        this.set('podNumber', this.get('podNumber') + 1);
        this.set('energy', this.get('energy') + 9);
        this.podMover();
    },
    podMover: function() {
        this.set('energyX', Math.round(Math.random() * 10));
        this.set('energyY', Math.round(Math.random() * 10));
    }
});