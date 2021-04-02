import { Component, OnInit, Input } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { SwotService } from 'src/app/services/swot/swot.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressReport } from 'src/app/models/swot-model/progress-report';

@Component({
  selector: 'app-add-swot-progress',
  templateUrl: './add-swot-progress.component.html',
  styleUrls: ['./add-swot-progress.component.css']
})
export class AddSwotProgressComponent implements OnInit {
  reportForm: FormGroup;
  progressReport: ProgressReport;
  @Input() swot: Swot;

  constructor(private swotService: SwotService,
    private formBuild: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.reportForm = this.formBuild.group({
      inputReport: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.progressReport = new ProgressReport;
    this.progressReport.report = this.reportForm.get('inputReport')?.value;
    this.progressReport.timestamp = new Date();
    this.swot.progressReports.push(this.progressReport);
    this.swotService.addProgressReport(this.progressReport, this.swot).subscribe((data: any) => {
    });
    this.modalService.dismissAll();
  }

}
