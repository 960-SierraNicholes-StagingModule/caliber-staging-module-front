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
  //swot: Swot;
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
    console.log("the swot id is: " + this.swotId);
    this.associate = JSON.parse(sessionStorage.getItem('associate'));
    console.log("the associate is: " + this.associate.firstName);
    //this.pullSwotData();
    //console.log("the associate's swots are: " + this.swotAnalyses);
    this.getSwotById();
    console.log("the selected swot is: " + this.swot);
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

   /**
   * This method pulls the SWOT analysis data from the backend
   */
     /*pullSwotData() {
      this.swotService
        .getSwotByAssociatedId(this.associate.id)
        .subscribe((data: any) => {
          this.swotAnalyses = data;
        });
    }

    getSwotById(){
      this.swot = this.swotAnalyses.find(x => x.id == this.swotId);
    }*/

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
}
