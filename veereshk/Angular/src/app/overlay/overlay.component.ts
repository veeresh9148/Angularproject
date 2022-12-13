import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent {
  constructor(private toastr: ToastrService) {}
  isEnabled: boolean = false;
  addedItemlist: string[] = [];

  cartItemlist: string[] = [];
  onAddItemHandler(addItem: string) {
    if (this.addedItemlist.includes(addItem)) {
      this.toastr.error('This Item is Already Exist');
    } else if (this.addedItemlist.length == 6) {
      this.isEnabled = true;
      this.toastr.error('6 Items Only Allowed');
    } else if (this.addedItemlist.length != 6) {
      this.addedItemlist.push(addItem);
      this.toastr.success('Item Added Successfully...');
    } else {
      this.isEnabled = false;
    }
  }

  onAfterDelete(btnStatus) {
    if (btnStatus) {
      this.isEnabled = false;
    }
  }

  onCartItemListHandler(item: string) {
    this.cartItemlist.push(item);
  }
}
