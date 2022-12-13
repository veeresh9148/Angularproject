import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  constructor(private toastr: ToastrService) {}

  @Input() cartList;
  onDeleteCartHandler(item) {
    this.cartList.splice(item, 1);
    this.toastr.success('Cart Item Deleted Successfully');
  }

  onPurchaseHandler(item) {
    this.cartList.splice(item, 1);
    this.toastr.success('Thanks for Visiting...Item Purchased Successfully...');
  }
}
