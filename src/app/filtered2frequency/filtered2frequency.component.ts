import { Component, OnInit, Input } from '@angular/core';
const data = require('../../../database/amazon.json');

@Component({
  selector: 'app-filtered2frequency',
  templateUrl: './filtered2frequency.component.html',
  styleUrls: ['./filtered2frequency.component.css']
})
export class Filtered2frequencyComponent implements OnInit {
  @Input() dataSource: any[];
  showHide: boolean = false;
  supportValue: number;

  displayedColumns = ['itemset', 'support'];
  dataSource1: any[];
  dataSource2: any[];
  all_items: any[];

  constructor() { }

  ngOnInit() {
    let dataCollector = [];
    for (let i = 0; i < this.dataSource[0].length; i++) {
      for (let j = i + 1; j < this.dataSource[0].length; j++) {
        dataCollector.push([this.dataSource[0][i][0], this.dataSource[0][j][0], this.dataSource[0][i][1], this.dataSource[0][j][1], this.calculateItemsFrequency(this.dataSource[0][i][0], this.dataSource[0][j][0])]);
      }
    }
    this.dataSource1 = dataCollector;
    this.all_items = data[20]['all_items'];
    this.supportValue = this.dataSource[1];
  }

  calculateItemsFrequency(itemA, itemB) {
    let count = 0;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i][itemA] === 1 && data[i][itemB] === 1) {
        count++;
      }
    }
    return count;
  }

  onClick() {
    let val = this.supportValue;
    this.showHide = !this.showHide;
    this.dataSource2 = this.dataSource1.filter(function (item) {
      if( ((item[4]/20) * 100) >= val ) {
        return item;
      }
    });
  }
}

export interface Element {
  itemset: string;
  support: number;
}
