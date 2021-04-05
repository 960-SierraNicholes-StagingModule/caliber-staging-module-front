import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

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
  public radarChartLabels: Label[] = ['Javascript', 'Java', 'SQL', 'Servlet', 'Hibernate', 'Spring', 'Microservices'];
  public chartData: ChartDataSets[] = [
    { data: [81.82, 84.67, 80.36, 69.06, 59.57, 69.81, 70], label: 'Associate', backgroundColor: 'rgba(144, 238, 144, .5)', borderColor: 'rgba(78, 186, 126, 255)', pointBackgroundColor: 'rgba(78, 186, 126,255)' },
    { data: [80.3, 79.25, 83.14, 79.55, 73.34, 64.52, 74.44], label: 'J2EE', backgroundColor: 'rgba(184, 209, 224, .5)', borderColor: 'rgba(114, 164, 194,255)', pointBackgroundColor: 'rgba(114, 164, 194,255)'},
  ];
  public radarChartType: ChartType = 'radar';

  public barChartLabels: Label[] = ['Presentation', 'Exam', 'Verbal'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [81.82, 84.67, 80.36, 69.06, 59.57, 69.81, 70], label: 'Associate', backgroundColor: 'rgba(144, 238, 144, .8)', hoverBackgroundColor: 'rgba(78, 186, 126,255)'},
    { data: [80.3, 79.25, 83.14, 79.55, 73.34, 64.52, 74.44], label: 'J2EE', backgroundColor: 'rgba(184, 209, 224, .8)', hoverBackgroundColor: 'rgba(114, 164, 194,255)'},
    { data: [75, 75, 75, 75, 75], label: 'Benchmark', type: 'line', backgroundColor: ['rgba(0,0,0,0)'], borderColor: ['rgba(0,255,0,255)'], borderWidth: 3, pointBackgroundColor: 'rgba(0,0,0,0)', pointBorderColor: 'rgba(0,0,0,0)', pointRadius: 0, hoverRadius: 0 },
    { data: [70, 70, 70, 70, 70], label: 'Passing', type: 'line', backgroundColor: ['rgba(0,0,0,0)'], borderColor: ['rgba(255,0,0,255)'], borderWidth: 3, pointBackgroundColor: 'rgba(0,0,0,0)', pointBorderColor: 'rgba(0,0,0,0)', pointRadius: 0, hoverRadius: 0},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
