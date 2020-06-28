import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {SpinnerComponent} from '../common/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, SpinnerComponent]
})
export class SearchModule { }
