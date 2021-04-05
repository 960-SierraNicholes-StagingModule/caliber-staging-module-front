import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { SpiderData } from 'src/app/models/spider-data/spider-data.model';
import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-graph-swot',
  templateUrl: './graph-swot.component.html',
  styleUrls: ['./graph-swot.component.css']
})
export class GraphSwotComponent implements OnInit {
  // Radar or spider graph.
  public chartOptions: RadialChartOptions = {
    responsive: true,
    scales: {
      ticks: {fontColor: 'black', suggestedMin: 0, suggestedMax: 100}
    }
  };
  public barChartOptions: RadialChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: { fontColor: 'black', min: 0, max: 100, stepSize: 20}
      }]
    }
  };
  public radarChartLabels: Label[] = []; //'Javascript', 'Java', 'SQL', 'Servlet', 'Hibernate', 'Spring', 'Microservices'
  public chartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  public barChartLabels: Label[] = ['Presentation', 'Exam', 'Verbal'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  private spiderData: number[] = [];

  public barChartData: ChartDataSets[] = [
    { data: [81.82, 84.67, 80.36], label: 'Associate', backgroundColor: 'rgba(144, 238, 144, .8)', hoverBackgroundColor: 'rgba(78, 186, 126,255)', borderColor: 'rgba(78, 186, 126, 255)', borderWidth: 3},
    { data: [80.3, 79.25, 83.14], label: 'J2EE', backgroundColor: 'rgba(184, 209, 224, .8)', hoverBackgroundColor: 'rgba(114, 164, 194,255)', borderColor: 'rgba(114, 164, 194,255)', borderWidth: 3},
    { data: [75, 75, 75, 75], label: 'Benchmark', type: 'line', backgroundColor: ['rgba(0,0,0,0)'], borderColor: ['rgba(0,255,0,255)'], borderWidth: 3, pointBackgroundColor: 'rgba(0,0,0,0)', pointBorderColor: 'rgba(0,0,0,0)', pointRadius: 0, hoverRadius: 0 },
    { data: [70, 70, 70, 70], label: 'Passing', type: 'line', backgroundColor: ['rgba(0,0,0,0)'], borderColor: ['rgba(255,0,0,255)'], borderWidth: 3, pointBackgroundColor: 'rgba(0,0,0,0)', pointBorderColor: 'rgba(0,0,0,0)', pointRadius: 0, hoverRadius: 0},
  ];

  constructor(private graphDataServ: GraphDataService) { }

  ngOnInit(): void {
    this.graphDataServ.getSpiderDataByBatchAndAssociate('TR-1201','mock4.associatecdad37b2-449a-48e1-92dc-c1887a281d8b@mock.com').subscribe(
      res => {
        console.log(res);
        //push 7 elements into array.
        for(let i = 0; i < 7; i++) {
          //this.data.push(res[i]);
          this.radarChartLabels.push(res[i].assessmentType);
          this.spiderData.push(res[i].score);
        }
        this.chartData = [
          { data: this.spiderData, label: 'Associate', backgroundColor: 'rgba(144, 238, 144, .5)', borderColor: 'rgba(78, 186, 126, 255)', pointBackgroundColor: 'rgba(78, 186, 126,255)' },
          { data: [80.3, 79.25, 83.14, 79.55, 73.34, 64.52, 74.44], label: 'J2EE', backgroundColor: 'rgba(184, 209, 224, .5)', borderColor: 'rgba(114, 164, 194,255)', pointBackgroundColor: 'rgba(114, 164, 194,255)'},
        ]
      }
    )
  }

}
