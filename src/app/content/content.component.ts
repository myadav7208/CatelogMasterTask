import { Component, OnInit } from '@angular/core';
import { FilterChip } from '../commons/components/filter-chips/filter-chips.component';
import { data } from '../content/data';
import { CatelogData } from '../commons/components/item-card/item-card.component';
import { debounceTime, distinctUntilChanged, switchMap, Observable, of, Subject } from 'rxjs';

const ASC = 'asc';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  filterChips: FilterChip[] = [
    { id: 1, categoryName: 'e-voucher', label: 'E-voucher' },
    { id: 2, categoryName: 'products', label: 'Products' },
    { id: 3, categoryName: 'evergreen', label: 'Evergreen' },
  ]

  catelogData: CatelogData[] = data;
  sortOrder = ASC;
  searchTerms = new Subject<string>();
  constructor() {
    this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(term => this.search(term)) // switch to new observable each time the term changes
    ).subscribe((filteredData: CatelogData[]) => {
      this.catelogData = filteredData;
    });
  }

  ngOnInit(): void {
    this.sortCatelog();
  }

  removeChip(chipInfo: FilterChip) {
    this.filterChips = this.filterChips.filter(chip => chip.id !== chipInfo.id);
  }

  sortCatelog() {
    if (this.sortOrder === ASC) {
      this.catelogData = this.catelogData.sort((data1, data2) => data1.name.localeCompare(data2.name));
    } else {
      this.catelogData = this.catelogData.sort((data1, data2) => data2.name.localeCompare(data1.name));
    }
  }

  resetAll() {
    this.sortOrder = ASC;
    this.sortCatelog();
  }

  onSearch(event: Event): void {
    this.searchTerms.next((event.target as HTMLInputElement).value.trim().toLowerCase());
  }

  search(term: string): Observable<CatelogData[]> {
    return of(data.filter(item => item.name.toLowerCase().includes(term.toLowerCase().trim())));
  }

}
