import Phaser from "phaser";

import {Drumset} from "./drumset.group";
import {InputHandler} from "./input-handler";

export class DrumState extends Phaser.Scene {

    constructor() {
        super();

        this.inputHandler = new InputHandler(this);
        this.drumset = new Drumset(this);
    }

    preload() {
        console.log('Enter drum state');

        this.drumset.preload();
    }

    create() {
        this.drumset.create();

        this.input.keyboard.on('keydown', (e) => {
            console.log(e.key);
            this.inputHandler.drumhit(e);
        });
    }

    update (time, delta) {

    }
}