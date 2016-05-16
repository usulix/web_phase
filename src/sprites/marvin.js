'use strict';

import enableBehaviors from '../behaviors/enableBehaviors';
import MarvinMove from '../behaviors/marvinMove';

export default class Marvin extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'dude');
    game.physics.arcade.enable(this);
    enableBehaviors(this);

    this.addBehavior(new MarvinMove());
  }
}