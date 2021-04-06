import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/models/associate-model/associate.model';

@Component({
  selector: 'app-my-swot',
  templateUrl: './my-swot.component.html',
  styleUrls: ['./my-swot.component.css']
})
export class MySwotComponent implements OnInit {

  currentAssociate:Associate;

  constructor()
   {
    this.currentAssociate = JSON.parse(sessionStorage.getItem('associate'))
    console.log(this.currentAssociate);
   }

  ngOnInit(): void {
  }

}
