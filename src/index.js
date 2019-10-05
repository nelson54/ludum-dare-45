import Phaser from "phaser";
import {MenuState} from "./menu-state/menu.state";
import {DrumState} from "./drum-state/drum.state";

class HorseBeats extends Phaser.Game {
  constructor() {
    super(1280, 720, Phaser.AUTO, document.querySelector('body'), );

    this.scene.add('menu-state', new MenuState(), true);
    this.scene.add('drum-state', new DrumState(), false);

    this.scale.mode = Phaser.Scale.FIT;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.fullScreenScaleMode = Phaser.Scale.FIT;
  }


}

window.game = new HorseBeats();
