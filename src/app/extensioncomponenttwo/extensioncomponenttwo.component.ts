import { Component, OnInit } from '@angular/core';
var data = require('../../../database/amazon.json');

@Component({
  selector: 'app-extensioncomponenttwo',
  templateUrl: './extensioncomponenttwo.component.html',
  styleUrls: ['./extensioncomponenttwo.component.css']
})
export class ExtensioncomponenttwoComponent implements OnInit {
  data: any[];
  title: string;
  constructor() { }

  ngOnInit() {
    this.data = data;
    this.title = 'Amazon';
  }

  selected = '';
  supportValue = 0;
  displayedColumns = ['_id', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];
  displayedColumns1 = ['itemset', 'support'];
  all_items = data[20]['all_items'];
  dataSource = ELEMENT_DATA;
  showHide = false;
  newOneFrequency = [];
  dataSource1 = TABLE_ELEMENT_SOURCE;
  count = 0;

  toggleCalculation(inputValue) {
    this.showHide = !this.showHide;
    this.supportValue = inputValue;
    if(this.count !== 0) {
      this.count = 0;
      this.newOneFrequency = [];
    }
    this.count++;
  }

  calculateVal(itemType, index) {
    let total = 0;
    itemType = itemType.concat(index + 1);

    for (let i = 0; i < this.data.length - 1; i++) {
      for (const prop in this.data[i]) {
        if (prop === itemType) {
          total += this.data[i][prop];
        }
      }
    }
    if (((total / 20) * 100) >= this.supportValue) {
      if(!this.newOneFrequency.includes([itemType, index, total])) {
        this.newOneFrequency.push([itemType, index, total]);
      }
      total = total;
    } else {
      total = 0;
    }
    return total;
  }
}

export interface Element {
  _id: string;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  item7: number;
  item8: number;
  item9: number;
  item10: number;
}

export interface Element1 {
  itemset: string;
  support: number;
}

const ELEMENT_DATA: Element[] = data;
const TABLE_ELEMENT_SOURCE: Element1[] = data[20]['all_items'];
