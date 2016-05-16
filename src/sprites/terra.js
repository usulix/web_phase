'use strict';

import enableBehaviors from '../behaviors/enableBehaviors';
import Firma from '../behaviors/firma';

export default class Terra extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'ground');
        
    game.physics.arcade.enable(this);
    enableBehaviors(this);
    this.addBehavior(new Firma());
  }
}