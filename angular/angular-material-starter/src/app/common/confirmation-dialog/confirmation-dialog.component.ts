import {Input, Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-addedit',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
  @Input() title?: string;

  constructor(public dialogRef: MdDialogRef<ConfirmationDialogComponent>) { }

}
