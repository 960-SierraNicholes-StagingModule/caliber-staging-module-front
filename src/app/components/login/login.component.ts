import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Associate } from 'src/app/models/associate-model/associate.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ngFireAuth: AngularFireAuth,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async loginUser() {
    const manager = this.loginForm.value;
    const userCredentials = await this.ngFireAuth.signInWithEmailAndPassword(
      manager.email,
      manager.password
    );
    this.loginService.getManagerId(userCredentials.user.email).subscribe(
      (personId)=>{
        if (personId != null){
          window.sessionStorage.setItem('managerId', personId);
          this.router.navigate(['home']);
        }else{
          this.loginService.getAssociate(userCredentials.user.email).subscribe(
            (resp) => {
            window.sessionStorage.setItem('associate', JSON.stringify(resp));
            this.router.navigate(['home']);
          });
      }
    });
  }
    // this.loginService
    //   .getManagerId(userCredentials.user.email)
    //   .subscribe((managerId) => {
    //     window.sessionStorage.setItem('managerId', managerId);
    //   });
    // // if(window.sessionStorage.getItem('managerId') == null){
    // //   this.loginService.getAssociateId(userCredentials.user.email)
    // //   .subscribe((associateId) => {
    // //     window.sessionStorage.setItem('associateId', associateId);
    // //   });
    // // }
    // this.router.navigate(['home']);
  
  // async registerUser(){
  //   const associate = this.loginForm.value;
  //   const userCredentials = await this.ngFireAuth
  //   .createUserWithEmailAndPassword(associate.email,associate.password);
  // }
}
