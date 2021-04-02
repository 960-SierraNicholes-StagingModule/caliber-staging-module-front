import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivationEnd, Router } from '@angular/router';
import { HttpCancelService } from 'src/app/services/http-cancel/http-cancel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  manager:boolean = false;
  
  constructor(
    private httpCancelService: HttpCancelService,
    private router: Router,
    private ngFireAuth: AngularFireAuth
  ) {
    if(window.sessionStorage.getItem('managerId') != null){
        this.manager = true;
      }

    }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.httpCancelService.cancelPendingRequests();
      }
    });
  }

  logOut() {
    this.ngFireAuth.signOut();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
