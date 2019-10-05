import Phaser from "phaser";
import sound from '../assets/metronome.mp3';
import image from '../assets/metronome.png';
export class Metronome extends Phaser.GameObjects.Sprite {

    static preload(scene) {
        scene.load.audio('metronome', sound);
        scene.load.image('metronome', image);
    }

    constructor(scene, x, y, name) {
        super(scene, x, y, 'metronome');
        this.active = false;
        this.setScale(.3)
        this.scene.add.existing(this);
    }

    toggle() {
        if(this.active) {
            this.active = false;
            this.timer.destroy();
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
        this.scaleX *= -1;
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