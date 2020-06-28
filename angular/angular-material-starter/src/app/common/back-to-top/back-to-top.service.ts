import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class BackToTopService {
  constructor() {}

  public scrollTop() {
    $('body,html').animate({scrollTop: 0}, 'slow');
  }
}
