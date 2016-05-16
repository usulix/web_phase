'use strict';

import BackDrop from '../sprites/backdrop';
import Terra from '../sprites/terra';
import Marvin from '../sprites/marvin';

export default class Main extends Phaser.State {

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);    
    let bd = new BackDrop(this.game, 'sky');
    this.add.existing(bd);
    
    let platforms = this.game.add.group();    
    let earth = new Terra(this.game, 0, this.game.world.height - 64);
    earth.scale.setTo(2, 2);
    platforms.add(earth);
    let ledge = new Terra(this.game, 400, 400);
    platforms.add(ledge);
    let ledge1 = new Terra(this.game, -150, 250);
    platforms.add(ledge1);
    this.platforms = platforms;
    this.marvin = new Marvin(this.game, 32, this.game.world.height - 150);
    this.add.existing(this.marvin);
  }
  
  update() {
    this.game.physics.arcade.collide(this.marvin,this.platforms);
  }
}
