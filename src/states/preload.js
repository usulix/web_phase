'use strict';

export default class Preload extends Phaser.State {
  preload() {
    this.barBg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading-bg');
    this.barBg.anchor.setTo(0.5, 0.5);
    // This bar will get cropped by the setPreloadSprite function as the game loads!
    this.bar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading-fg');
    this.bar.anchor.setTo(0.5, 0.5);
    this.game.load.setPreloadSprite(this.bar);

    this.game.load.bitmapFont('computerPixelFont', 'media/fonts/computerPixel.png', 'media/fonts/computerPixel.fnt');
  }

  create() {
    this.game.state.start('main', true, false);
  }
}
