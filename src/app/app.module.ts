import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { PerfectScrollbarModule} from './perfect-scrollbar/perfect-scrollbar.module';
import { AppComponent } from './app.component';
import { rootReducer} from '../app/perfect-scrollbar/Redux/Reducers/simple.reducer';
import { DataSample, INITIAL_STATE } from '../app/perfect-scrollbar/Redux/Model/data-sample';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PerfectScrollbarModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<DataSample> , private devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE , [], enhancers);
  }
 }

