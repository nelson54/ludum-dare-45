import { Drum } from "./drum.sprite";
import image from "../../assets/drums/cymbal.png";
import sound from "../../assets/drums/cymbal.mp3";

let name = 'cymbal';
let audioName = 'cymbal-audio';
let imageName = 'cymbal-image';

export class Cymbal extends Drum {
    static preload(scene) {
        scene.load.audio(audioName, sound);
        scene.load.image(imageName, image);
    }

    constructor(group, x, y) {
        super(group, x, y, imageName);
        this.key = 'a';
        this.audioName = audioName;
    }

}
