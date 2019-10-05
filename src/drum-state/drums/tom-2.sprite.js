import { Drum } from "./drum.sprite";
import image from "../../assets/green-transparent.png";
import sound from "../../assets/drums/tom-2.mp3";

let name = 'tom-2';
let audioName = 'tom-2-audio';
let imageName = 'tom-2-image';

export class Tom2 extends Drum {
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
