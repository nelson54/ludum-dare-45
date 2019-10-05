import Phaser from "phaser";
import sound from '../assets/metronome.mp3';
export class Metronome extends Phaser.GameObjects.Sprite {

    static preload(scene) {
        scene.load.audio('metronome', sound);
    }

    constructor(scene, x, y, name) {
        super(scene, x, y, name);
        this.active = false;
        this.scene.add.existing(this);
    }

    toggle() {
        if(this.active) {
            this.active = false;
            this.timer.stop();
        } else {
            this.active = true;
            this.timer = this.scene.time.addEvent({
                delay: 500,                // ms
                callback: (e) => this.tick(e),
                //args: [],
                loop: true
            });
        }
    }

    tick(e) { // time, delta
        let current = this.scene.time;
        if(!this.lastTime) {
            this.lastTime = this.scene.time.now
        } else {
            let currentTime = current.now - this.lastTime;
            this.lastTime = current.now;
            console.log(`Tick: ${currentTime}`)
        }
        this.scene.sound.play('metronome');
    }
}