import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate/ng2-translate';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '../../assets/i18n', '.json');
}

@NgModule({
    declarations: [

    ],
    exports: [ TranslateModule, HttpModule ],
    imports: [
      TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }),
    ],
    providers: [ TranslateService ]
})

export class TranslateSharedModule {

}
