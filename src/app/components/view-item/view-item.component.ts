import { Component, OnInit, Input } from '@angular/core';
import { SwotItem } from 'src/app/models/swot-model/swot-item';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  @Input() inItem: SwotItem;

  constructor() { }

  ngOnInit(): void {
  }

}
