import Phaser from "phaser";

import {Snare} from "./drums/snare.sprite";
import {Cymbal} from "./drums/cymbal.sprite";
import {Cowbell} from "./drums/cowbell.sprite";


export class Drumset extends Phaser.GameObjects.Group {

    constructor(scene) {
        super(scene, 'drumset', true);
        this.scene = scene;
        scene.drumset = this;
    }

    preload() {
        Snare.preload(this.scene);
        Cymbal.preload(this.scene);
        Cowbell.preload(this.scene);
    }

    create() {

        this.snare = this.addSprite(Snare, 0, 0);
        this.cymbal = this.addSprite(Cymbal, 0, 0);
        this.cowbell = this.addSprite(Cowbell, 0, 0)
    }

    addSprite(Ctr, x, y) {
        let xOffset = 1280/2;
        let yOffset = 720;

        x = xOffset - x;
        y = yOffset - y;

        return new Ctr(this, x, y)
    }
}