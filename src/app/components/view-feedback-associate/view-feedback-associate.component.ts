import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';
import { Feedback } from 'src/app/models/feedback-model/feedback.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
import { AddFeedbackComponent } from 'src/app/components/add-feedback/add-feedback.component';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';
import { UpdateFeedbackComponent } from '../update-feedback/update-feedback.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Associate } from 'src/app/models/associate-model/associate.model';

@Component({
  selector: 'app-view-feedback-associate',
  templateUrl: './view-feedback-associate.component.html',
  styleUrls: ['./view-feedback-associate.component.css']
})
export class ViewFeedbackAssociateComponent implements OnInit {
  associate: Associate;
  feedbackArray: Feedback[] = [];
  feedbackItem: Feedback;
  currentFeedback: Feedback;
  formIncomplete = true;
  finalCheck = false;
  contentInput = '1px solid #ced4da';
  associateId: number;
  userData: any;

  constructor( 
    private feedbackService: FeedbackService,
    private router: Router,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private toastService: ToastRelayService,
    private ngFireAuth: AngularFireAuth, public afAuth: AngularFireAuth, ) {

      /* https://www.positronx.io/full-angular-7-firebase-authentication-system/
      Saving user data in localstorage when 
    logged in and setting up null when logged out */
    /*this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.associate = JSON.parse(sessionStorage.getItem('associate'));
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })*/
  }
     

  ngOnInit(): void {
    this.associate = JSON.parse(sessionStorage.getItem('associate'));
    this.pullFeedbackData();
  }

/**
   * This method requests the data on feedbacks from the backend
   */
 pullFeedbackData() {
  this.feedbackService.getFeedbackByAssociateId(this.associate.id)
    .subscribe((data: any) => {
      this.feedbackArray = data;
    })
}

logOut() {
  this.ngFireAuth.signOut();
  window.sessionStorage.clear();
  this.router.navigate(['/login']);
  
}
}



