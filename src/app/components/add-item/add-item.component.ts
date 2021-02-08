import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Component, OnInit, Input } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { SwotItem } from 'src/app/models/swot-model/swot-item';
import { NgForm } from '@angular/forms';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  swotItem : SwotItem;
  @Input() parentSwot : Swot;

  constructor(
    private swotService : SwotService, 
    private modalService: NgbModal,
    private toastService: ToastRelayService) { }

  ngOnInit(): void {
    this.swotItem = new SwotItem(0, "", "", "", this.parentSwot.id)
  }

  onSubmit(itemForm: NgForm) {
    this.swotService.addItem(this.swotItem)
      .subscribe(data => {
        // alert("Success! New SWOT item has been added.")
        this.toastService.addToast({
          header:'New SWOT item added!',
          body:`${this.swotItem.type}`
        });
      });
      this.modalService.dismissAll();
  }

}
