import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../shared/service/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private appService: AppService) {
  }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }

  checkIfOnline(): boolean {
    return this.appService.isLoggedIn();
  }
}

