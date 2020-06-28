import { Component, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent {
  @Input() name: string;
  @Input() id: number;

  constructor(public activeModal: NgbActiveModal) { }

}
