import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

// ヒーロー配列のモック→serviceクラスに機能移行

  heroes: Hero[];

  // selectedHero: Hero;

  // heroService プロパティとして定義, HeroService を注入すべき場所として認識
  // コンストラクタでは初期化のみ行う
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Componentの初期化時に発火
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  // }



}
