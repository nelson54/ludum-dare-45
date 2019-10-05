import { Drum } from "./drum.sprite";
import image from "../../assets/red-transparent.png";
import sound from "../../assets/drums/hi-hat.mp3";

let name = 'hi-hat';
let audioName = 'hi-hat-audio';
let imageName = 'hi-hat-image';

export class HiHat extends Drum {
    static preload(scene) {
        scene.load.audio(audioName, sound);
        scene.load.image(imageName, image);
    }

    constructor(group, x, y) {
        super(group, x, y, imageName);
        this.setScale(250, 100);
        this.audioName = audioName;
    }
}
