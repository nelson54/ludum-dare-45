import Phaser from "phaser";

import {Snare} from "./drums/snare.sprite";
import {Cymbal} from "./drums/cymbal.sprite";
import {Cowbell} from "./drums/cowbell.sprite";
import {Tom1} from "./drums/tom-1.sprite";
import {Tom2} from "./drums/tom-2.sprite";
import {HiHat} from "./drums/hi-hat.sprite";


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
        Tom1.preload(this.scene);
        Tom2.preload(this.scene);
        HiHat.preload(this.scene);
    }

    create() {


        this.cymbal = this.addSprite(Cymbal, -500, 415);
        this.cowbell = this.addSprite(Cowbell, 180, 215);
        this.tom1 = this.addSprite(Tom1, -250, 115);
        this.tom2 = this.addSprite(Tom2, 0, 115);
        this.snare = this.addSprite(Snare, -400, 10);
        this.hiHat = this.addSprite(HiHat, 260, 400)
    }

    addSprite(Ctr, x, y) {
        let xOffset = 1280/2;
        let yOffset = 720;

        x = xOffset + x;
        y = yOffset - y;

        return new Ctr(this, x, y)
    }
}