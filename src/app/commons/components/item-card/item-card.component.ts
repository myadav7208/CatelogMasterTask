import { Component, Input, OnInit } from '@angular/core';

export interface CatelogData {
  pk: number,
  name: string,
  points: number,
  imgUrl: string,
  quantity: number,
  validUntil: string,
  lowQuantity: number
}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() data!: CatelogData;
  constructor() { }

  ngOnInit(): void {
  }

}
