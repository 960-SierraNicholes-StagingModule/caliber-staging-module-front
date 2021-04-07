import { Component, Input, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';

@Component({
  selector: 'app-associate-nav-bar',
  templateUrl: './associate-nav-bar.component.html',
  styleUrls: ['./associate-nav-bar.component.css']
})
export class AssociateNavBarComponent implements OnInit {

  @Input()
  selectedSwot: Swot;

  constructor() { }

  ngOnInit(): void {
  }

  selectSwot(swot:Swot){
    this.selectedSwot = swot;
  }

  deselectSwot(){
    this.selectedSwot = null;
  }

}
