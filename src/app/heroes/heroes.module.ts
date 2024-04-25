import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";



@NgModule({
  declarations: [
    HeroComponent,
    HeroListComponent
  ],
  exports: [
    HeroComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
