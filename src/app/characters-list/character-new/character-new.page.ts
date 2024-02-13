import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CharacterService } from 'src/app/character.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-new',
  templateUrl: './character-new.page.html',
  styleUrls: ['./character-new.page.scss'],
})
export class CharacterNewPage implements OnInit {
  public character!: Character;

  constructor(
    private characterService: CharacterService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.character = new Character();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Character enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/characters']);
      }, 2000);
    });
  }

  add() {
    if (this.isCharacterValid(this.character)) {
      this.characterService.saveNewCharacter(this.character).subscribe(() => {
        this.character = new Character();
        this.presentToast();
      });
    } else {
      this.presentErrorToast('Veuillez remplir tous les champs');
    }
  }

  isCharacterValid(character: Character): boolean {
    return (
      character.name !== '' &&
      character.age !== 0 &&
      character.height !== 0 &&
      character.gender !== '' &&
      character.race !== '' &&
      character.class !== ''
    );
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}