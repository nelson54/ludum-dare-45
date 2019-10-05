import Phaser from "phaser";

import { Drumset } from "./drumset.group";
import { InputHandler } from "./input-handler";
import { Metronome } from "./metronome.sprite";

import backdrop from '../assets/backdrop.png';

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
        this.load.image('backdrop', backdrop);
    }

    create() {
        this.add.image(0, 0, 'backdrop').setOrigin(0, 0);

        this.drumset.create();

        this.metronome = new Metronome(this, 500, 100, 'metronome');

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