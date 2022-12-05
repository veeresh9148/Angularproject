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
  AddedItemlist: string[] = [];

  CartItemlist: string[] = [];
  AddItem(AddItem: string) {
    if (this.AddedItemlist.includes(AddItem)) {
      this.toastr.error('This Item is Already Exist');
    } else if (this.AddedItemlist.length == 6) {
      this.isEnabled = true;
      this.toastr.error('6 Items Only Allowed');
    } else if (this.AddedItemlist.length != 6) {
      this.AddedItemlist.push(AddItem);
      this.toastr.success('Item Added Successfully...');
    } else {
      this.isEnabled = false;
    }
  }

  //Deleted Item
  EmitStatus(event) {
    console.log(event);
    this.isEnabled = false;
  }

  //  DeleteItem(remove){
  //   this.AddedItemlist.splice(remove)
  // }

  CartItem(Cart: string) {
    console.log(Cart);
    this.CartItemlist.push(Cart);
  }
}
