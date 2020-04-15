import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// コンポーネントクラスにアノテーション
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // Componentの初期化時に発火
  ngOnInit(): void {
  }



}
