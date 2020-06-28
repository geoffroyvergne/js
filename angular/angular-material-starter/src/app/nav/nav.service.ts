import { Injectable } from '@angular/core';
import {TranslateService} from 'ng2-translate';

export class Nav {
  links: Link[];
}

export class Link {
  route: string;
  label: string;
  icon?: string;
  show?: boolean;
  role?: string;
}

@Injectable()
export class NavService {
  public isLogged: boolean;

  constructor(private translateService: TranslateService) {
    this.translateService.use('en');
  }

  public getNav(): Nav {
    return {
      links: [
        {route: '/home', label: 'Home', icon: 'home'},
        {route: '/test', label: 'Test', icon: 'apps'},
        {route: '/debug', label: 'Debug', icon: 'build'},
        {route: '/user', label: 'User', icon: 'account_box', role: 'ROLE_ADMIN'}
      ]
    };
  }

  public setLanguage(language: string): void {
    this.translateService.use(language);
  }
}
