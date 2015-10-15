'use strict';

import Behavior from './behavior';

const MAX_VEL = 400;
const MAX_ACCEL = 1000;
const DRAG = 2400;
const EPSILON = 64;

export default class PlayerMove extends Behavior {
  constructor() {
    super();
    this.target = new Phaser.Point();
    this.angleForMove = new Phaser.Point();
  }

  added(player) {
    this.player = player;
    player.body.maxVelocity.setTo(MAX_VEL);
    player.body.drag.setTo(DRAG);
    this.target.x = player.x;
    this.target.y = player.y;
    player.game.input.onTap.add(this.onTap, this);
  }

  onTap(pointer) {
    this.target.x = pointer.worldX;
    this.target.y = pointer.worldY;
    this.maxDistance = this.player.position.distance(this.target);
    this.stopAccelDistance = this.maxDistance / 4;
    this.player.game.physics.arcade.accelerateToXY(this.player, this.target.x, this.target.y, MAX_ACCEL);
  }

  update(player) {
    if (!player.alive) {
      return;
    }
    let body = player.body;
    let target = this.target;
    let currentDistance = player.position.distance(target);
    if (currentDistance < this.stopAccelDistance) {
      player.body.acceleration.set(0);
    }
  }
}
