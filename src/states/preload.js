'use strict';

export default class Preload extends Phaser.State {
  preload() {
    game.load.image('sky', require('../../media/images/sky.png'));
    game.load.image('ground', require('../../media/images/platform.png'));
    game.load.image('star', require('../../media/images/star.png'));
    game.load.spritesheet('dude', require('../../media/images/dude.png'), 32, 48);
  }

  create() {
    this.game.state.start('main', true, false);
  }
}
