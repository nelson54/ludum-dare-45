import { Drum } from "./drum.sprite";
import image from "../../assets/green-transparent.png";
import sound from "../../assets/drums/tom-1.mp3";

let name = 'tom-1';
let audioName = 'tom-1-audio';
let imageName = 'tom-1-image';

export class Tom1 extends Drum {
    static preload(scene) {
        scene.load.audio(audioName, sound);
        scene.load.image(imageName, image);
    }

    constructor(group, x, y) {
        super(group, x, y, imageName);
        this.setScale(200, 200);
        this.audioName = audioName;
    }
}
