var gameStart = require('./views/startGame');
var PlayGameView = require('./views/playGame');
var GameModel = require('./models/gameModel');
var gameOverView = require('./views/endGame');

module.exports = Backbone.Router.extend({
    initialize: function() {
        this.game = new GameModel();
        this.view = null;
    },
    //Setting the routes
    //These link the URL items to their respective functions
    //The functions as below
    routes: {
        'new': 'newCharacter',
        'play': 'playGame',
        'gameover': 'gameOver',
    },
    //When the user clicks new - the following happens
    newCharacter: function() {
        console.log('new game');

        if (this.view !== null) {
            this.view.el.innerHTML = '';
            this.view.undelegateEvents();
        }
        this.view = new gameStart({
            model: this.game,
            el: document.getElementById('new-player-section'),
        });
        this.view.render();
    },
    //When the user clicks play - the following happens
    playGame: function() {
        console.log('play game');

        if (this.view !== null) {
            this.view.el.innerHTML = '';
            this.view.undelegateEvents();
        }
        this.view = new PlayGameView({
            model: this.game,
            el: document.getElementById('play-game-section'),
        });
        this.view.render();
    },
    gameOver: function() {
        console.log('game over');

        if (this.view !== null) {
            this.view.el.innerHTML = '';
            this.view.undelegateEvents();
        }
        this.view = new gameOverView({
            model: this.game,
            el: document.getElementById('game-over-section'),
        });
        this.view.render();
    },
});