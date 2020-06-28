import { Component, OnInit, Renderer } from '@angular/core';
import { BackToTopService } from './back-to-top.service';

declare var $: any;

@Component({
  selector: 'app-back-to-top',
  template: `
    <a *ngIf="visible" class="scroll-top affix" title="Scroll to the top" (click)="backToTopService.scrollTop()" affix-top>
      <i class="fa fa-chevron-circle-up fa-3x"></i>
    </a>
  `,
  styleUrls: [ './back-to-top.component.css' ],
  providers: [ BackToTopService ]
})
export class BackToTopComponent implements OnInit {

  public visible = false;

  constructor(private renderer: Renderer, public backToTopService: BackToTopService) {
    this.renderer.listenGlobal('window', 'scroll', (event) => {
      if (document.body.scrollTop >= 100) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    });
  }

  ngOnInit() {

  }
}
