import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  // route.snapshotは、コンポーネントが作成された直後のルート情報の静的イメージ
  // paramMapは、URL から抽出されたルートパラメータ値の辞書 "id"キーは、フェッチするヒーローのidを返す
  // ルートパラメータは常に文字列, JavaScript (+) 演算子は文字列を数値に変換します。これがヒーローのidの値
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  this.location.back();
}
}
