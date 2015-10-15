'use strict';

export default class Preload extends Phaser.State {
  preload() {
    this.barBg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading-bg');
    this.barBg.anchor.setTo(0.5, 0.5);
    // This bar will get cropped by the setPreloadSprite function as the game loads!
    this.bar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading-fg');
    this.bar.anchor.setTo(0.5, 0.5);
    this.game.load.setPreloadSprite(this.bar);

    this.game.load.bitmapFont('computerPixelFont', require('../../media/fonts/computerPixel.png'), require('../../media/fonts/computerPixel.fnt'));

    this.game.load.spritesheet('sprites', require('../../media/images/sprites.png'), 32, 32);
    this.game.load.image('drhayesLogo', require('../../media/images/drhayes.png'), 552, 586);

    this.game.load.audio('smallBoom', require('../../media/sounds/smallBoom.mp3'));
    this.game.load.audio('mediumBoom', require('../../media/sounds/mediumBoom.mp3'));
  }

  create() {
    this.game.state.start('main', true, false);
  }
}
