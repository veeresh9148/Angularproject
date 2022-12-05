import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  constructor(private toastr: ToastrService) {}

  title = 'Angular-Assignment-1';

  @Input() listitem: string[] = [];

  @Output() DeleteItemEvent = new EventEmitter<string[]>();
  DeleteItem(remove) {
    //this.listitem.splice(remove,1)
    if (this.listitem.splice(remove, 1)) {
      this.DeleteItemEvent.emit(this.listitem);
      this.toastr.success('Item Deleted Successfully');
    }
  }

  @Output() CartItemEvent = new EventEmitter<string>();

  CartItem(cart) {
    //console.log(cart)
    this.CartItemEvent.emit(cart);
    this.toastr.success('Item Added into Cart');
  }
}
