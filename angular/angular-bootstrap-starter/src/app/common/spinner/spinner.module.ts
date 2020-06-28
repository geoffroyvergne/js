import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SpinnerComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent
    ],
    imports: [
        BrowserModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class SpinnerModule {
}
