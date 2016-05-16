'use strict';

import Behavior from './behavior';

export default class Firma extends Behavior {
	constructor() {
		super();
	}

	update() {
		//
	}
	
	added(terra){
		terra.body.immovable = true;
	}
}