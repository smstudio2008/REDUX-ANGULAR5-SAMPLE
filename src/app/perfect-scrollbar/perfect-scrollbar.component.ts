import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { DataSample } from './Redux/Model/data-sample';

@Component({
  selector: 'app-perfect-scrollbar',
  templateUrl: './perfect-scrollbar.component.html',
  styleUrls: ['./perfect-scrollbar.component.css']
})
export class PerfectScrollbarComponent implements OnInit {

  @select() sample;

  constructor(private ngRedux: NgRedux<DataSample>) {
  }

  ngOnInit() {
  }

}
