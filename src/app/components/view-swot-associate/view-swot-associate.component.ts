import { Associate } from './../../models/associate-model/associate.model';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SwotItem } from './../../models/swot-model/swot-item';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Component, Input, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';
import { AddSwotProgressComponent } from '../add-swot-progress/add-swot-progress.component';

@Component({
  selector: 'app-view-swot-associate',
  templateUrl: './view-swot-associate.component.html',
  styleUrls: ['./view-swot-associate.component.css'],
})
export class ViewSwotAssociateComponent implements OnInit {
  swotId: number;

  @Input()
  swot: Swot;
  pModalDisplay: string;


  constructor(
    private swotService: SwotService,
    private router: Router,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private toastService: ToastRelayService,
  ) {}

  /**
   * This requests all the data on a SWOT analysis from the backend on initialization
   */
  ngOnInit(): void {
    
  }

  openProgressReport() {
    const modalRef = this.modalService.open(AddSwotProgressComponent);
    modalRef.componentInstance.swot = this.swot;
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  setPModalDisplay(s: string) {
    this.pModalDisplay = s;
  }

}
