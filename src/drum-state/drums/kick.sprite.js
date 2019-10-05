import { Drum } from "./drum.sprite";
import image from "../../assets/drums/kick.png";
import sound from "../../assets/drums/kick.mp3";

let name = 'kick';
let audioName = 'kick-audio';
let imageName = 'kick-image';

export class Kick extends Drum {
    static preload(scene) {
        scene.load.audio(audioName, sound);
        scene.load.image(imageName, image);
    }

    constructor(group, x, y) {
        super(group, x, y, imageName);
        this.audioName = audioName;
        this.key = 'j';
    }
}
