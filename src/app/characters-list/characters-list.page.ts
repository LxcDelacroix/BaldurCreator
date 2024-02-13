import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {
  characters!: Array<Character>;

  constructor(
    private Character: CharacterService
  ) { }

  ngOnInit() {
    this.Character.getAll().subscribe((data: any) => {
      this.characters = data;
    });
  }

}
