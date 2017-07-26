import {Component, OnInit} from "@angular/core";
import {Endpoint} from "./config/Endpoint";
import {ENDPOINTS} from "./config/endpoints";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private endpoints: Endpoint[];

  ngOnInit(): void {
    this.endpoints = ENDPOINTS;
  }
}
