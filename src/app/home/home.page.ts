import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  
  
})
export class HomePage {

  title = 'Tour of Heroes';
  heroes = ['Windstorm','Bombasto','Magneta','Tornado'];
  myHero = this.heroes[0];

  constructor() {}

}
