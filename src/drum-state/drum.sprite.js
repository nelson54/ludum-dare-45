import Phaser from "phaser";

export class Drum extends Phaser.GameObjects.Sprite {
    static rawPreload(scene, name, image, sound) {
        scene.load.audio(name, `../assets/sounds/${sound}.mp3`);
        scene.load.image(name, `../assets/sounds/${sound}.mp3`);
    }

    constructor(scene, x, y, name) {
        super(scene, x, y, name);

        this.name = name;
    }

    play() {

    }
}
