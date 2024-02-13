import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CharacterService } from 'src/app/character.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  modif: boolean = false;
  character!: Character;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.characterService.get(id).subscribe((value: any) => {
      this.character = value; 
    });
  }

  async setUpdate() {
    const alert = await this.alertCtrl.create({
      header: 'Attention ! Vous êtes sur le point de modifier un personnage.',
      subHeader: 'Vous êtes sur le point de changer la vie de ce personnage.',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Modifier',
          handler: () => { this.modif = true; }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    await toast.present();
  }

  onUpdate() {
    if (this.isCharacterValid(this.character)) {
      this.characterService.update(this.character).subscribe(() => {
        this.presentToast('Modification enregistrée avec succès.');
        this.modif = false;
      });
    } else {
      this.presentToast('Veuillez remplir tous les champs.');
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

  onDelete(id: any) {
    this.characterService.delete(id); 
    this.router.navigate(['/characters']); 
  }
}
