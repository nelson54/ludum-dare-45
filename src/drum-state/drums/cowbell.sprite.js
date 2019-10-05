import { Drum } from "./drum.sprite";
import image from "../../assets/drums/cowbell.png";
import sound from "../../assets/drums/cowbell.mp3";

let name = 'cowbell';
let audioName = 'cowbell-audio';
let imageName = 'cowbell-image';

export class Cowbell extends Drum {
    static preload(scene) {
        scene.load.audio(audioName, sound);
        scene.load.image(imageName, image);
    }

    constructor(group, x, y) {
        super(group, x, y, imageName);
        this.audioName = audioName;
    }
}
