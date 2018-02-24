import { Component, OnInit, Input } from '@angular/core';
let data = require('../../../database/amazon.json');

@Component({
  selector: 'app-associationresult',
  templateUrl: './associationresult.component.html',
  styleUrls: ['./associationresult.component.css']
})
export class AssociationresultComponent implements OnInit {
  @Input() dataSource: any[];
  dataSource1: any[];
  dataSource2: any[];
  dataSource3: any[];
  displayedColumns = ['itemset', 'support', 'confidence'];
  supportValue: number;
  confidenceValue: number;
  showHide: Boolean = false;

  constructor() { }

  ngOnInit() {
    let dataCollector = [];
    let dataCollector1 = [];

    for(let i = 0; i < this.dataSource[0].length; i++) {
      dataCollector.push(this.dataSource[0][i]);
    }

    for(let j = 0; j < this.dataSource[1].length; j++) {
      dataCollector1.push(this.dataSource[1][j]);
    }

    this.dataSource1 = dataCollector;
    this.dataSource2 = dataCollector1;
    this.supportValue = this.dataSource[2];
  }

  onClick(confidenceVal) {
    this.confidenceValue = confidenceVal;
    let supportValue = this.supportValue;
    let confidenceValue = confidenceVal;
    let dataSource3 = [];

    if(this.dataSource1.length > 0) {
      for(let i = 0; i < this.dataSource1.length; i++) {
        dataSource3.push([
          data[20]['all_items'][this.dataSource1[i][2]] + ' -> ' + data[20]['all_items'][this.dataSource1[i][3]],
          this.precisionRound ((this.dataSource1[i][4] / 20 ) * 100, -1),
          this.calculateConfidenceValue(this.dataSource1[i][0], this.dataSource1[i][1], this.dataSource1[i][4], 0)
        ])
      }
    }

    if(this.dataSource2.length > 0) {
      for(let i = 0; i < this.dataSource2.length; i++) {
        dataSource3.push([
          data[20]['all_items'][this.dataSource2[i][2]] + ' , ' + data[20]['all_items'][this.dataSource2[i][3]] + ' -> ' + data[20]['all_items'][this.dataSource2[i][5]],
          this.precisionRound ((this.dataSource2[i][6] / 20) * 100, -1),
          this.calculateConfidenceValue(this.dataSource2[i][0], this.dataSource2[i][1], this.dataSource2[i][4], this.dataSource2[i][6])
        ])
      }
    }
    this.showHide = !this.showHide;
    this.dataSource3 = dataSource3.filter(function (item) {
      if( item[2] >= confidenceValue && item[1] >= supportValue ) {
        return item;
      }
    });;
    console.log(this.dataSource3);
  }

  calculateConfidenceValue(iA, iB, abVal, extra) {
    if(extra === 0) {
      let itemA = iA;
      let itemB = iB;
      let abValue = abVal;
      let aValue = this.calculateSingleValue(itemA);
      console.log('this is double ', itemA, ' ', itemB, ' ', abValue, ' ', aValue);
      return this.precisionRound ((abValue / aValue) * 100, 2);
    }

    if(extra !== 0) {
      let itemA = iA;
      let itemB = iB;
      let itemC = abVal;
      let abcValue = extra;
      let abValue = this.calculateDoubleValue(itemA, itemB);
      console.log('this is triple ', itemA, ' ', itemB, ' ', itemC, ' ', abcValue, ' ', abValue);
      return this.precisionRound ((abcValue / abValue) * 100, 2);
    }
  }

  calculateSingleValue(item) {
    let total = 0;

    for (let i = 0; i < data.length - 1; i++) {
      for (const prop in data[i]) {
        if (prop === item) {
          total += data[i][prop];
        }
      }
    }
    return total;
  }

  calculateDoubleValue(itemA, itemB) {
    let count = 0;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i][itemA] === 1 && data[i][itemB] === 1) {
        count++;
      }
    }
    return count;
  }

  precisionRound(number, precision) {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }
}

export interface Element {
  itemset: string;
  support: number;
  confidence: number
}
