'use strict';

import Behavior from './behavior';

export default class MarvinMove extends Behavior {
	constructor() {
		super();
	}

	update() {
		//
	}

	added(marvin) {
		//  Player physics properties. Give the little guy a slight bounce.
		marvin.body.bounce.y = 0.2;
		marvin.body.gravity.y = 300;
		marvin.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		marvin.animations.add('left', [0, 1, 2, 3], 10, true);
		marvin.animations.add('right', [5, 6, 7, 8], 10, true);
	}
}