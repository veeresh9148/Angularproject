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
  onDeleteCart(cart) {
    this.cartList.splice(cart, 1);
    this.toastr.success('Cart Item Deleted Successfully');
  }

  onPurchase(cart) {
    this.cartList.splice(cart, 1);
    this.toastr.success('Thanks for Visiting...Item Purchased Successfully...');
  }
}
