import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/service/product.service';
import {AppService} from '../../shared/service/app.service';
import {CartService} from '../../shared/service/cart.service';


@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./../../app.component.css'],
})
export class ProductsByCategoryComponent implements OnInit {
  private productsByCategory: Array<ProductModel> = [];
  product: ProductModel = new ProductModel();

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private appService: AppService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.productsByCategory = data['productsByCategory'];
    });
  }

  checkOnlineStatus(): boolean {
    return this.appService.isLoggedIn();
  }

  addToCart(product: ProductModel) {
    this.product = product;
    this.cartService.addProductToCart(product);
  }

  plusQuantity(product: ProductModel) {
    if (product.count < 99) {
      return this.cartService.increaseQuantity(product);
    }
  }

  minusQuantity(product: ProductModel) {
    if (product.count > 1) {
      return this.cartService.decreaseQuantity(product);
    }
  }
}
