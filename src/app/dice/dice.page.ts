import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dice',
  templateUrl: 'dice.page.html',
  styleUrls: ['dice.page.scss'],
})
export class DicePage {

  typeDice: string ="";
  resultatDice: number = 0;

  constructor(private toastController: ToastController) {}

  throwDice() {
    if (this.typeDice) {
      const min = 1;
      let max: number;
      switch (this.typeDice) {
        case 'd4':
          max = 4;
          break;
        case 'd6':
          max = 6;
          break;
        case 'd8':
          max = 8;
          break;
        case 'd10':
          max = 10;
          break;
        case 'd12':
          max = 12;
          break;
        case 'd20':
          max = 20;
          break;
        default:
          max = 6;
          break;
      }
      this.resultatDice = Math.floor(Math.random() * (max - min + 1)) + min;

      this.presentToast(`Résultat du dé (${this.typeDice}): ${this.resultatDice}`);
    } else {
      this.presentToast("Veuillez sélectionner un type de dé avant de le lancer.");
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
