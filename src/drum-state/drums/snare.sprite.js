import { Drum } from "./drum.sprite";
import image from "../../assets/red-transparent.png";
import sound from "../../assets/drums/snare.mp3";

let name = 'snare';
let audioName = 'snare-audio';
let imageName = 'snare-image';

export class Snare extends Drum {
    static preload(scene) {
        scene.load.audio(audioName, sound);
        scene.load.image(imageName, image);
    }

    constructor(group, x, y) {
        super(group, x, y, imageName);
        this.setScale(280, 200);
        this.audioName = audioName;
    }
}
