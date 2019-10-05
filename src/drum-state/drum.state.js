import Phaser from "phaser";

import { Drumset } from "./drumset.group";
import { InputHandler } from "./input-handler";
import { Metronome } from "./metronome.sprite";

export class DrumState extends Phaser.Scene {

    constructor() {
        super();

        this.inputHandler = new InputHandler(this);
        this.drumset = new Drumset(this);
    }

    preload() {
        console.log('Enter drum state');
        Metronome.preload(this);

        this.drumset.preload();
    }

    create() {
        this.drumset.create();

        this.metronome = new Metronome(this, 0, 0, 'metronome');

        this.input.keyboard.on('keydown', (e) => {
            console.log(e.key);

            if(event.key === ' ') {
                this.metronome.toggle();
            } else {
                this.inputHandler.drumhit(e);
            }
        });
    }

    update (time, delta) {

    }
}