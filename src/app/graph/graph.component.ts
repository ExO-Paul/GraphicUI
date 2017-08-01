import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {StatsService} from '../service/stats.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import {Data} from "../model/Data";


const REFRESH_INTERVAL = 1000;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  providers: [StatsService]
})
export class GraphComponent implements OnInit {

  private data: Data;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'label'}
  ];
  public lineChartLabels: Array<string> = [];
  public lineChartOptions: any = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    },
    responsive: true
  };
  public lineChartColors: Array<any> = [
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }

  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  constructor(private statsService: StatsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let path;
    this.activatedRoute.url
      .switchMap((url: UrlSegment[]) => url)
      .subscribe(value => path = value.path);

    setInterval(
      () => this.statsService.getAll(path).then(data => {
        this.data = data;
        this.prepareGraph(this.data);
      }), REFRESH_INTERVAL);
  }

  private prepareGraph(graphData: Data): void {
    console.log(graphData);

    this.lineChartData = graphData.data.map(value => {
      return {data: value.values.reverse(), label: value.graphName}
    });

    this.lineChartLabels.length = 0;
    this.data.labels.reverse()
      .map(label => new Date(label * 1000).toLocaleTimeString())
      .forEach(label => this.lineChartLabels.push(label));

    this.lineChartColors.length = 0;
    graphData.data.map((value, index) => {
      console.log(index);
      console.log(`hsla(${(index + 10) * 10}, 100%, 10%)`);
      return {
        backgroundColor: `hsla(${(index + 1) * 10}, 100%, 10%, 1)`,
        borderColor: `hsla(${index * 10}, 100%, 0%, 1)`,
        pointBackgroundColor: `hsla(${index * 10}, 100%, 0%, 1)`,
        pointBorderColor: `hsla(${index * 10}, 100%, 0%, 1)`,
        pointHoverBackgroundColor: `hsla(${index * 10}, 100%, 50%, 1)`,
        pointHoverBorderColor: `hsla(${index * 10}, 100%, 50, 1%)`
      }
    }).forEach(value => this.lineChartColors.push(value))
  }


  // events
  public chartClicked(e: any): void {
    console.log(this.lineChartLabels);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
