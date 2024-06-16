import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { FilterChipsComponent } from './components/filter-chips/filter-chips.component';
import { FormsModule } from '@angular/forms';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ItemCardComponent,
    FilterChipsComponent,
    CategoryFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FilterChipsComponent,
    ItemCardComponent,
    CategoryFilterComponent,
    FormsModule
  ]
})
export class CommonsModule { }
