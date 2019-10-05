import Phaser from "phaser";

export class Drum extends Phaser.GameObjects.Sprite {
    static rawPreload(scene, name, image, sound) {
        scene.load.audio(name, `../assets/drums/${name}.mp3`);
        scene.load.image(name, `../assets/drums/${name}.png`);
    }

    constructor(scene, x, y, name) {
        super(scene, x, y, name);

        this.name = name;
        scene.add.existing(this);
    }

    play() {

    }
}
