import Phaser from "phaser";

import { Snare } from "./drums/snare.sprite";

export class DrumState extends Phaser.Scene {

    preload() {
        console.log('Enter drum state');
        Snare.preload(this);
    }

    create() {
        new Snare(this, 300, 300);
    }

    update (time, delta) {

    }
}