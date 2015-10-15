'use strict';

import Explosions from '../managers/explosions';
import Player from '../sprites/player';

export default class Main extends Phaser.State {
  create() {
    let explosions = new Explosions(this.game);

    let player = new Player(this.game, 100, 100);
    this.add.existing(player);
  }
}
