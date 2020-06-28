import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpinnerComponent {
    @Input() cssClass: String = 'fa fa-spinner fa-spin fa-3x fa-fw';

    constructor() { }
}
