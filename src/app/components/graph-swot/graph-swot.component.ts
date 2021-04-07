import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-graph-swot',
  templateUrl: './graph-swot.component.html',
  styleUrls: ['./graph-swot.component.css']
})
export class GraphSwotComponent implements OnInit {

  @Input() associate;

  public noUser: boolean = false;
  // Radar or spider graph.
  public chartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
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
  public radarChartLabels: Label[] = [];
  public chartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  public barChartLabels: Label[] = ['Presentation', 'Exam', 'Verbal'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  private spiderData: number[] = [];
  private averageData: number[] = [];

  private averageBarData: number[] = [];
  private associateBarData: number[] = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private graphDataServ: GraphDataService) { }

  ngOnInit(): void {
    this.graphDataServ.getSpiderDataByBatchAndAssociate('TR-1201',this.associate.email).subscribe(
      res => {
        //push 7 elements into array.
        for(let i = 0; i < 7; i++) {
          this.radarChartLabels.push(res[i].assessmentType);
          this.spiderData.push(res[i].score);
        }
        this.graphDataServ.getSpiderDataByBatch('TR-1201').then((avg) => {
          for(let i = 0; i < 7; i++)
            this.averageData.push(avg[i][1]);
        });
        this.chartData = [
          { data: this.spiderData, label: 'Associate', backgroundColor: 'rgba(144, 238, 144, .5)', borderColor: 'rgba(78, 186, 126, 255)', pointBackgroundColor: 'rgba(78, 186, 126,255)' },
          { data: this.averageData, label: 'J2EE', backgroundColor: 'rgba(184, 209, 224, .5)', borderColor: 'rgba(114, 164, 194,255)', pointBackgroundColor: 'rgba(114, 164, 194,255)'},
        ]
      },
      err => {
        this.noUser = true;
      }
    )
    this.graphDataServ.getBarDataByAssociate(this.associate.email).subscribe(
      res => {
        //push values we need into array for graph.
        this.associateBarData.push(res.traineeGrades.Presentation);
        this.associateBarData.push(res.traineeGrades.Exam);
        this.associateBarData.push(res.traineeGrades.Verbal);
        this.averageBarData.push(res.restOfBatchGrades.Presentation);
        this.averageBarData.push(res.restOfBatchGrades.Exam);
        this.averageBarData.push(res.restOfBatchGrades.Verbal);

        this.barChartData = [
          { data: this.associateBarData, label: 'Associate', backgroundColor: 'rgba(144, 238, 144, .8)', hoverBackgroundColor: 'rgba(78, 186, 126,255)', borderColor: 'rgba(78, 186, 126, 255)', borderWidth: 3},
          { data: this.averageBarData, label: 'J2EE', backgroundColor: 'rgba(184, 209, 224, .8)', hoverBackgroundColor: 'rgba(114, 164, 194,255)', borderColor: 'rgba(114, 164, 194,255)', borderWidth: 3},
          { data: [75, 75, 75, 75], label: 'Benchmark', type: 'line', backgroundColor: ['rgba(0,0,0,0)'], borderColor: ['rgba(0,255,0,255)'], borderWidth: 3, pointBackgroundColor: 'rgba(0,0,0,0)', pointBorderColor: 'rgba(0,0,0,0)', pointRadius: 0, hoverRadius: 0 },
          { data: [70, 70, 70, 70], label: 'Passing', type: 'line', backgroundColor: ['rgba(0,0,0,0)'], borderColor: ['rgba(255,0,0,255)'], borderWidth: 3, pointBackgroundColor: 'rgba(0,0,0,0)', pointBorderColor: 'rgba(0,0,0,0)', pointRadius: 0, hoverRadius: 0},
        ];
      },
      err => {
        this.noUser = true;
      }
    )
  }
}
