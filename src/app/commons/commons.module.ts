import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { FilterChipsComponent } from './components/filter-chips/filter-chips.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ItemCardComponent,
    FilterChipsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FilterChipsComponent
  ]
})
export class CommonsModule { }
