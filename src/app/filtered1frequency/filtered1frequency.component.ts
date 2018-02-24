import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filtered1frequency',
  templateUrl: './filtered1frequency.component.html',
  styleUrls: ['./filtered1frequency.component.css']
})
export class Filtered1frequencyComponent implements OnInit {
  @Input() dataSource: any[];
  displayedColumns = ['itemset', 'support'];
  dataSource1: any[];
  all_items: any[];
  supportValue: number;

  constructor() { }

  ngOnInit() {
    this.dataSource1 = this.dataSource[0];
    this.all_items = this.dataSource[1];
    this.supportValue = this.dataSource[2];
  }

}

export interface Element {
  itemset: string;
  support: number;
}
