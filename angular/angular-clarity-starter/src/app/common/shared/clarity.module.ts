import {NgModule} from '@angular/core';
import {ClarityModule} from 'clarity-angular';

@NgModule({
  exports: [ ClarityModule  ],
  imports: [
    ClarityModule.forRoot()
  ],
  declarations: [ ],
  providers: [ ]
})

export class ClaritySharedModule {

}
