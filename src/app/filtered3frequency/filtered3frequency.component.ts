import { Component, OnInit, Input } from '@angular/core';
const data = require('../../../database/amazon.json');

@Component({
  selector: 'app-filtered3frequency',
  templateUrl: './filtered3frequency.component.html',
  styleUrls: ['./filtered3frequency.component.css']
})
export class Filtered3frequencyComponent implements OnInit {
  @Input() dataSource: any[];
  dataSource1: any[];
  dataSource2: any[];
  displayedColumns = ['itemset', 'support'];
  showHide: boolean = false;
  supportValue: number;
  all_items = data[20]['all_items'];

  constructor() { }

  ngOnInit() {
    let dataCollector = [];

    for(let i = 0; i < this.dataSource[0].length - 1; i++) {
      if(this.dataSource[0][i][0] === this.dataSource[0][i + 1][0]) {
        dataCollector.push(
          [
            this.dataSource[0][i][0],
            this.dataSource[0][i][1],
            this.dataSource[0][i][2],
            this.dataSource[0][i][3],
            this.dataSource[0][i + 1][0],
            this.dataSource[0][i + 1][2],
            this.calculateValue(this.dataSource[0][i][0], this.dataSource[0][i][1], this.dataSource[0][i + 1][0])
          ]
        );
      }
    }
    this.dataSource1 = dataCollector;
    this.supportValue = this.dataSource[1];
  }

  calculateValue(itemA, itemB, itemC) {
    let count = 0;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i][itemA] === 1 && data[i][itemB] === 1 && data[i][itemC] === 1) {
        count++;
      }
    }
    return count;
  }

  onClick() {
    let val = this.supportValue;
    this.showHide = !this.showHide;
    this.dataSource2 = this.dataSource1.filter(function (item) {
      if( ((item[6]/20) * 100) >= val ) {
        return item;
      }
    });
  }
}


export interface Element {
  itemset: string;
  support: number;
}
