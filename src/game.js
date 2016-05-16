'use strict';

require('../index.html');
require('../vendor/phaser.min.js');

var Boot = require('./states/boot');
var Preload = require('./states/preload');
var Intro = require('./states/intro');
var MainMenu = require('./states/mainMenu');
var Main = require('./states/main');

var game = window.game = new Phaser.Game({
  width: 800,
  height: 600,
  renderer: Phaser.AUTO,
  state: new Boot(),
  transparent: false,
  antialias: false,
  canvasStyle: ''
});
game.state.add('preload', new Preload());
game.state.add('intro', new Intro());
game.state.add('mainMenu', new MainMenu());
game.state.add('main', new Main());
