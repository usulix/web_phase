'use strict';

import Behavior from './behavior';

const MAX_VEL = 600;
const DRAG = 1200;
const EPSILON = 32;
const EASE = (k) => Math.sin(2 * Math.PI * k);

export default class PlayerMove extends Behavior {
  constructor() {
    super();
    this.target = new Phaser.Point();
    this.angleForMove = new Phaser.Point();
  }

  added(player) {
    this.player = player;
    // player.body.maxVelocity.setTo(MAX_VEL);
    // player.body.drag.setTo(DRAG);
    this.target.x = player.x;
    this.target.y = player.y;
    player.game.input.onTap.add(this.onTap, this);
  }

  onTap(pointer) {
    this.target.x = pointer.worldX;
    this.target.y = pointer.worldY;
    this.maxDistance = this.player.position.distance(this.target);
  }

  update(player) {
    if (!player.alive) {
      return;
    }
    let body = player.body;
    let target = this.target;
    let maxDistance = this.maxDistance;
    let currentDistance = player.position.distance(target);

    this.angleForMove.set(target.x - player.x, target.y - player.y);
    this.angleForMove.normalize();
    if (currentDistance > EPSILON) {
      let factor = EASE((maxDistance - currentDistance) / maxDistance) + 0.1;
      console.log(factor);
      // Move toward target.
      // this.angleForMove.rotate(0, 0, 5, true);
      // TODO: proportional to distance to target
      this.angleForMove.multiply(MAX_VEL * factor, MAX_VEL * factor);
    }
    body.velocity.x = this.angleForMove.x;
    body.velocity.y = this.angleForMove.y;
  }
}
