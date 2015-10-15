'use strict';

import Player from '../sprites/player';

export default class Main extends Phaser.State {
  create() {
    let player = new Player(this.game, 100, 100);
    this.add.existing(player);
  }
}
