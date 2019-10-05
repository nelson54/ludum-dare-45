import Phaser from "phaser";

class JamGame extends Phaser.Game {
  constructor() {
    super(1280, 720, Phaser.AUTO, document.querySelector('body'), {
      preload() {
        this.game.state.add('drum-state', new DrumState(this.game, "Player 1"));
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
      },
      create(){
        this.game.input.gamepad.start();
        this.scene.start('drum-state');

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
      }
    });

  }
}

window.game = new JamGame();
