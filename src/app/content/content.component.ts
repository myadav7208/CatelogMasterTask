import { Component, OnInit } from '@angular/core';
import { FilterChip } from '../commons/components/filter-chips/filter-chips.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  filterChips: FilterChip[] = [
    { id:1, categoryName: 'e-voucher', label: 'E-voucher'},
    { id: 2, categoryName: 'products', label: 'Products'},
    { id: 3, categoryName: 'evergreen', label: 'Evergreen'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  removeChip(chipInfo: FilterChip) {
    this.filterChips = this.filterChips.filter(chip => chip.id !== chipInfo.id);
  }

}
