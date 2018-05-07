import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ADD_SAMPLE} from '../app/perfect-scrollbar/Redux/Action/Data.action';
import { DataSample } from '../app/perfect-scrollbar/Redux/Model/data-sample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: String = 'The REDUX Challenge';
  constructor(private ngRedux: NgRedux<DataSample>) {
  }


  addData() {

    this.ngRedux.dispatch({ type: ADD_SAMPLE, currentDate: new Date()});

  }
  autoScrolling() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
