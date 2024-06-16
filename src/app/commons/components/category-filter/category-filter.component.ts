import { Component, Input, OnInit } from '@angular/core';

export interface CategoryFilter {
  categoryName: string,
  checkboxState?: boolean
}

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  @Input() category!: CategoryFilter;
  constructor() { }

  ngOnInit(): void {
  }

}
