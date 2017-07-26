import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {StatsService} from "../service/stats.service";

import "rxjs/add/operator/switchMap";
import {GraphData} from "../model/GraphData";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  providers: [StatsService]
})
export class GraphComponent implements OnInit {

  private data: GraphData;

  constructor(private statsService: StatsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.url
      .switchMap((url: UrlSegment[]) => url)
      .subscribe(data => this.statsService.getAll(data.path)
        .then(data => this.data = data));
  }
}
