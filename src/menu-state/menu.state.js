import Phaser from "phaser";


export class MenuState extends Phaser.Scene {

    preload() {
    }

    create() {
        console.log('Enter menu state');

        this.cameras.main.setBackgroundColor(0x000000);

        let style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        //  The Text is positioned at 0, 100
        this.add.text(0, 0, 'Click to start', { fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', align: 'center', });

        this.input.on('pointerdown', ()=> this.scene.start('drum-state'));
    }


}