import Phaser from "phaser";

export class Drum extends Phaser.GameObjects.Sprite {
    static rawPreload(scene, name, image, sound) {
        scene.load.audio(name, `../assets/drums/${name}.mp3`);
        scene.load.image(name, `../assets/drums/${name}.png`);
    }

    constructor(group, x, y, name) {
        super(group.scene, x, y, name);

        this.name = name;

        this.setOrigin(.5, 1);
        this.setPosition(x, y);

        group.add(this);
        group.scene.add.existing(this);

        group.scene.events.on('drumhit', this.handle, this)
    }

    handle(event) {
        this.play()
    }

    play() {
        this.scene.sound.play(this.audioName);
    }
}
