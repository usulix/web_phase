'use strict';

import TiltMove from '../behaviors/tiltMove';

export default class Guard extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'sprites', 0);

    this.addBehavior(new TiltMove());

    this.anchor.setTo(0.5);
    this.body.width = 30;
    this.body.height = 30;
    this.body.bounce.set(1);
  }

  update() {
    if (!this.alive) {
      return;
    }
    this.behave('update');
  }
}
