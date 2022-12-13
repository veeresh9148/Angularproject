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

  @Input() listItem: string[] = [];

  @Output() deleteItemEvent = new EventEmitter<string[]>();
  onDeleteItemHandler(itemName) {
    if (this.listItem.splice(itemName, 1)) {
      this.deleteItemEvent.emit(this.listItem);
      this.toastr.success('Item Deleted Successfully');
    }
  }

  @Output() cartItemEvent = new EventEmitter<string>();

  onCartItemHandler(itemName) {
    this.cartItemEvent.emit(itemName);
    this.toastr.success('Item Added into Cart');
  }
}
