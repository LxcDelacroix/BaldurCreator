export class Character {
    id?: string;
    name: string;
    age: number;
    race: string;
    backstory: string;
    height: number;
    gender: string;
    class: string;
    pictureLink: string;

    constructor() {
        this.name = '';
        this.age = 0;
        this.height = 0;
        this.gender = '';
        this.race = '';
        this.class = '';
        this.backstory = '';
        this.pictureLink = '';
    }
}
