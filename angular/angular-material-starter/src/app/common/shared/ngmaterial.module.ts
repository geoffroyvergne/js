import { NgModule } from '@angular/core';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  exports: [ MaterialModule, MdNativeDateModule, FlexLayoutModule ],
  imports: [
    MaterialModule, MdNativeDateModule, FlexLayoutModule
  ],
  declarations: [ ],
})

export class NgMaterialSharedModule {

}
