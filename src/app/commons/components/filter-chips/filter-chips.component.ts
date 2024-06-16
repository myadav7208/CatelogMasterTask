import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface FilterChip {
  id: number,
  categoryName: string,
  label: string
}

@Component({
  selector: 'app-filter-chips',
  templateUrl: './filter-chips.component.html',
  styleUrls: ['./filter-chips.component.scss']
})
export class FilterChipsComponent implements OnInit {
  @Input()
  chip!: FilterChip;
  @Output() chipRemoverEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeChip() {
    this.chipRemoverEmitter.emit(this.chip);
  }

}
