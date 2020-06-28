import { Component, OnInit } from '@angular/core';
import {Link, NavService} from '../nav.service';

@Component({
  selector: 'app-nav-responsive',
  templateUrl: './nav-responsive.component.html',
  styleUrls: ['./nav-responsive.component.css']
})
export class NavResponsiveComponent implements OnInit {

  public links: Link[];

  constructor(public navService: NavService) {
    this.links = navService.getNav().links;
  }

  ngOnInit() {
  }

}
