import { Associate } from './../../models/associate-model/associate.model';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SwotItem } from './../../models/swot-model/swot-item';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Component, Input, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AddSwotProgressComponent } from '../add-swot-progress/add-swot-progress.component';
import { ViewItemComponent } from '../view-item/view-item.component';
import { ProgressReport } from 'src/app/models/swot-model/progress-report';
import { ViewProgressReportComponent } from '../view-progress-report/view-progress-report.component';

@Component({
  selector: 'app-view-swot-associate',
  templateUrl: './view-swot-associate.component.html',
  styleUrls: ['./view-swot-associate.component.css'],
})
export class ViewSwotAssociateComponent implements OnInit {
  swotId: number;
  swot: Swot;
  swotAnalyses: Swot[] = [];
  associate: Associate;

  @Input()
  pModalDisplay: string;


  constructor(
    private swotService: SwotService,
    private router: Router,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private toastService: ToastRelayService,
    private ngFireAuth: AngularFireAuth, public afAuth: AngularFireAuth
  ) {}

  /**
   * This requests all the data on a SWOT analysis from the backend on initialization
   */
  ngOnInit(): void {
    this.swotId = +this.route.snapshot.paramMap.get('swotId')!.valueOf();
    this.associate = JSON.parse(sessionStorage.getItem('associate'));
    this.getSwotById();
  }

  openProgressReport() {
    const modalRef = this.modalService.open(AddSwotProgressComponent);
    modalRef.componentInstance.swot = this.swot;
    console.log(typeof this.swot.progressReports[0].createdDate);
  }

  getSwotById(){
    this.swotService
      .getSwotBySwotId(this.swotId)
      .subscribe((data: any) => {
        this.swot = data;
      });
  }


  logOut() {
    this.ngFireAuth.signOut();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
    
  }

  openItemView(inputItem: SwotItem) {
    const modalRef = this.modalService.open(ViewItemComponent);
    modalRef.componentInstance.inItem = inputItem;
  }

  openProgressReportView(report: ProgressReport) {
    const modalRef = this.modalService.open(ViewProgressReportComponent);
    modalRef.componentInstance.p = report;
  }
}
