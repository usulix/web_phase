'use strict';

export default class BackDrop extends Phaser.Sprite {
  constructor(game, strSprite) {
    super(game, 0, 0, strSprite);
  }
}