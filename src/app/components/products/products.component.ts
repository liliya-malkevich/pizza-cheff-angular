import { Component, OnInit } from '@angular/core';
import { Products,ProductsService } from 'src/app/services/products.service';
import { Lightbox } from "ngx-lightbox";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   _albums: Array<any> = [];
  products : Products[];
  constructor(private  _service: ProductsService,private _lightbox: Lightbox) {
    this.products = _service.getProducts();
    this._albums.push({
      src:
        "../../../assets/img/section2/pizza(1).jpg",
      caption: this.products[0].name,
      thumb:
        "../../../assets/img/section2/pizza(1).jpg"
    },
    {
      src:
        "../../../assets/img/section2/pizza(2).jpg",
        caption: this.products[1].name,
      thumb:
        "../../../assets/img/section2/pizza(2).jpg"
    },
    {
      src:
        "../../../assets/img/section2/pizza(3).jpg",
        caption: this.products[2].name,
      thumb:
        "../../../assets/img/section2/pizza(3).jpg"
    },
    {
      src:
        "../../../assets/img/section2/pizza(4).jpg",
        caption: this.products[3].name,
      thumb:
        "../../../assets/img/section2/pizza(4).jpg"
    },
    {
      src:
        "../../../assets/img/section2/pizza(5).jpg",
        caption: this.products[4].name,
      thumb:
        "../../../assets/img/section2/pizza(5).jpg"
    },
    {
      src:
        "../../../assets/img/section2/pizza(6).jpg",
        caption: this.products[5].name,
      thumb:
        "../../../assets/img/section2/pizza(6).jpg"
    },
    {
      src:
        "../../../assets/img/section2/pizza(7).jpg",
        caption: this.products[6].name,
      thumb:
        "../../../assets/img/section2/pizza(7).jpg"
    },
    {
      src:
        "../../../assets/img/section2/pizza(8).jpg",
        caption: this.products[7].name,
      thumb:
        "../../../assets/img/section2/pizza(8).jpg"
    });
   }

  ngOnInit(): void {
  }

  open(i:number) : void {

    this._lightbox.open(this._albums,i)

  }

  close(): void {
    this._lightbox.close();
  }

}
