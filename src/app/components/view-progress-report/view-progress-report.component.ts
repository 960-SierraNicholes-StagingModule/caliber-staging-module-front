import { Component, OnInit, Input } from '@angular/core';
import { ProgressReport } from 'src/app/models/swot-model/progress-report';

@Component({
  selector: 'app-view-progress-report',
  templateUrl: './view-progress-report.component.html',
  styleUrls: ['./view-progress-report.component.css']
})
export class ViewProgressReportComponent implements OnInit {
  @Input() p: ProgressReport;

  constructor() { }

  ngOnInit(): void {
  }

}
