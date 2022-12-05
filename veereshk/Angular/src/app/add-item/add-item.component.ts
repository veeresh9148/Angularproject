import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  constructor(private toastr: ToastrService) {}
  @Input() inpEnabled;
  Items = 'Enter Item Name';
  @Output() AddItemEvent = new EventEmitter<string>();
  inpValue: string = '';
  handleClick(event) {
    console.log(event);
    if (!this.inpValue) {
      this.toastr.error('Item Name is required');
    } else if (!/^[a-zA-Z]*$/.test(this.inpValue)) {
      this.toastr.error('Please Enter Valid Item Name');
    } else {
      this.AddItemEvent.emit(event);
    }
  }
}
