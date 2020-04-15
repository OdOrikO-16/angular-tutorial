import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'; // ← 1.FormsModuleのインポート

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ← 2.ngModuleのimports配列内に加えることで有効化
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
