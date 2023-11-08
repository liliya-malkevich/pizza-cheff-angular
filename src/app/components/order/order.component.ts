import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order : Order = new Order('','','');
  isSubmit : boolean = false;
  constructor(private _service : OrderService) { }

  ngOnInit(): void {
  }

  submitOrder(order: Order) {
    //console.log(this.order)
    if (!this.order.name || !this.order.address || !this.order.phone) {
      console.error('Заполнены не все поля');
      return;
    }
    else {
      this.isSubmit =true;
      this._service.addOrder(order).subscribe({error: error => console.log(error)});
    }

  }
  close() {
    this.isSubmit = false;
  }
}
