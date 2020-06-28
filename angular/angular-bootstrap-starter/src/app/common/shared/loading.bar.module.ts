import { NgModule } from '@angular/core';
import {SlimLoadingBarModule, SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {LoadingBarService} from '../service/loading.bar.service';

@NgModule({
  exports: [ SlimLoadingBarModule  ],
  imports: [
    SlimLoadingBarModule.forRoot()
  ],
  providers: [ LoadingBarService, SlimLoadingBarService ]
})

export class LoadingBarSharedModule {

}
