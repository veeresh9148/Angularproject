import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  constructor(private toastr: ToastrService) {}
  
  @Input()cartlist;
  //deleted only cart items
  onDeleteCart(Cart){
    this.cartlist.splice(Cart, 1)
    this.toastr.success("Cart Item Deleted Successfully")
  }

  onPurchase(Cart){
    this.cartlist.splice(Cart, 1)
    this.toastr.success("Thanks for Visiting...Item Purchased Successfully...")
  }
}
