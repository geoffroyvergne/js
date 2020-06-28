import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let cssClass =  'fa fa-times text-danger';

    if (value) {
      cssClass = 'fa fa-check text-info';
    }

    return cssClass;
  }

}
