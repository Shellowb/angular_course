import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[] = ['Spiderman', 'ironman', 'SheHulk', 'Hulk', 'Thor']
    public deleted_hero?: string;

    removeLastHero(): void {
      this.deleted_hero = this.heroNames.pop()
    }
}
