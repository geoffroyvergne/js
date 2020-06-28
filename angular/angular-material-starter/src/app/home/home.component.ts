import { Component, OnInit } from '@angular/core';
import {Configuration} from '../common/configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public configuration: Configuration;

  constructor() {
    this.configuration = Configuration;
  }

  ngOnInit() {
  }

}
